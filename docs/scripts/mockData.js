// Données mockées pour la démo sans backend
const MOCK_DATA = {
    users: [
        {
            id: "1",
            email: "demo@hbnb.com",
            password: "demo123",
            first_name: "Demo",
            last_name: "User"
        }
    ],
    places: [
        {
            id: "1",
            title: "Appartement Moderne Centre-Ville",
            description: "Magnifique appartement au cœur de la ville avec vue panoramique. Proche de tous les commerces et transports.",
            price: 120,
            images: [
                {
                    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
                    caption: "Salon lumineux"
                },
                {
                    url: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800",
                    caption: "Cuisine moderne"
                }
            ],
            amenities: ["WiFi", "Kitchen", "Parking"]
        },
        {
            id: "2",
            title: "Villa avec Piscine",
            description: "Superbe villa avec piscine privée et grand jardin. Idéal pour des vacances en famille.",
            price: 350,
            images: [
                {
                    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
                    caption: "Vue extérieure"
                },
                {
                    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
                    caption: "Piscine"
                }
            ],
            amenities: ["WiFi", "Pool", "Garden", "BBQ"]
        },
        {
            id: "3",
            title: "Studio Cosy Quartier Latin",
            description: "Petit studio charmant dans un quartier historique. Parfait pour un séjour romantique.",
            price: 85,
            images: [
                {
                    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
                    caption: "Intérieur cosy"
                }
            ],
            amenities: ["WiFi", "Kitchen"]
        },
        {
            id: "4",
            title: "Loft Industriel Spacieux",
            description: "Grand loft de style industriel avec hauts plafonds. Espace de travail inclus.",
            price: 200,
            images: [
                {
                    url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800",
                    caption: "Espace principal"
                },
                {
                    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
                    caption: "Chambre"
                }
            ],
            amenities: ["WiFi", "Workspace", "Kitchen", "Parking"]
        },
        {
            id: "5",
            title: "Maison de Campagne",
            description: "Charmante maison de campagne entourée de nature. Calme et sérénité garantis.",
            price: 150,
            images: [
                {
                    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
                    caption: "Vue extérieure"
                }
            ],
            amenities: ["WiFi", "Garden", "Fireplace", "Parking"]
        },
        {
            id: "6",
            title: "Penthouse Luxueux",
            description: "Penthouse de luxe avec terrasse privée et vue imprenable sur la ville.",
            price: 500,
            images: [
                {
                    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
                    caption: "Salon luxueux"
                },
                {
                    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
                    caption: "Terrasse"
                }
            ],
            amenities: ["WiFi", "Kitchen", "Terrace", "Parking", "Gym"]
        }
    ],
    reviews: [
        {
            id: "1",
            place_id: "1",
            user_first_name: "Marie",
            user_last_name: "Dupont",
            rating: 5,
            text: "Excellent séjour ! L'appartement est exactement comme sur les photos. Très bien situé."
        },
        {
            id: "2",
            place_id: "1",
            user_first_name: "Pierre",
            user_last_name: "Martin",
            rating: 4,
            text: "Très bon rapport qualité-prix. Quelques petits détails à améliorer mais dans l'ensemble très satisfait."
        },
        {
            id: "3",
            place_id: "2",
            user_first_name: "Sophie",
            user_last_name: "Bernard",
            rating: 5,
            text: "Villa magnifique ! La piscine est un vrai plus. Parfait pour les enfants."
        },
        {
            id: "4",
            place_id: "3",
            user_first_name: "Luc",
            user_last_name: "Petit",
            rating: 4,
            text: "Studio mignon et bien placé. Un peu petit mais parfait pour deux personnes."
        },
        {
            id: "5",
            place_id: "4",
            user_first_name: "Emma",
            user_last_name: "Rousseau",
            rating: 5,
            text: "Loft incroyable ! Beaucoup d'espace et très bien équipé. Je recommande vivement."
        }
    ]
};

// Simulation d'un token JWT simple
function generateMockToken(user) {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload = btoa(JSON.stringify({
        user_id: user.id,
        email: user.email,
        exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expire dans 1 heure
    }));
    const signature = btoa("mock-signature");
    return `${header}.${payload}.${signature}`;
}

// API mockée
const MockAPI = {
    // Login
    login: async (email, password) => {
        await new Promise(resolve => setTimeout(resolve, 300)); // Simule un délai réseau
        const user = MOCK_DATA.users.find(u => u.email === email && u.password === password);
        if (user) {
            return {
                ok: true,
                json: async () => ({ access_token: generateMockToken(user) })
            };
        }
        return {
            ok: false,
            status: 401,
            json: async () => ({ message: "Email ou mot de passe incorrect" })
        };
    },

    // Get current user
    getMe: async (token) => {
        await new Promise(resolve => setTimeout(resolve, 200));
        if (!token) {
            return { ok: false, status: 401 };
        }
        // Dans une vraie app, on décoderait le token
        const user = MOCK_DATA.users[0]; // Retourne le premier utilisateur
        return {
            ok: true,
            json: async () => ({
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name
            })
        };
    },

    // Get all places
    getPlaces: async () => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return {
            ok: true,
            json: async () => MOCK_DATA.places
        };
    },

    // Get place by ID
    getPlace: async (id) => {
        await new Promise(resolve => setTimeout(resolve, 200));
        const place = MOCK_DATA.places.find(p => p.id === id);
        if (place) {
            return {
                ok: true,
                json: async () => place
            };
        }
        return { ok: false, status: 404 };
    },

    // Get reviews for a place
    getReviewsByPlace: async (placeId) => {
        await new Promise(resolve => setTimeout(resolve, 200));
        const reviews = MOCK_DATA.reviews.filter(r => r.place_id === placeId);
        return {
            ok: true,
            json: async () => reviews
        };
    },

    // Add review
    addReview: async (token, reviewData) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        if (!token) {
            return { ok: false, status: 401 };
        }
        const newReview = {
            id: String(MOCK_DATA.reviews.length + 1),
            ...reviewData,
            user_first_name: "Demo",
            user_last_name: "User"
        };
        MOCK_DATA.reviews.push(newReview);
        return {
            ok: true,
            json: async () => newReview
        };
    },

    // Get user profile
    getUserProfile: async (token, userId) => {
        await new Promise(resolve => setTimeout(resolve, 200));
        if (!token) {
            return { ok: false, status: 401 };
        }
        const user = MOCK_DATA.users[0]; // Retourne le premier utilisateur
        return {
            ok: true,
            json: async () => ({
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name
            })
        };
    },

    // Update user profile
    updateUserProfile: async (token, userId, data) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        if (!token) {
            return { ok: false, status: 401 };
        }
        // Met à jour les données mockées
        const user = MOCK_DATA.users[0];
        if (data.first_name) user.first_name = data.first_name;
        if (data.last_name) user.last_name = data.last_name;
        return {
            ok: true,
            json: async () => ({
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name
            })
        };
    }
};

// Export pour utilisation dans les autres scripts
window.MockAPI = MockAPI;
window.MOCK_MODE = true; // Flag pour indiquer qu'on est en mode mock
