// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Chat con WebSockets',
		category: 'Aplicación Web',
		img: require('@/assets/images/projects/chat.png'),
		singleProjectHeader: {
			singleProjectTitle: 'Chat con WebSockets',
			singleProjectDate: 'Ene 08, 2024',
			singleProjectTag: 'Aplicación Web',
		},
		projectImages: [
			{
				id: 1,
				title: 'Chat con WebSockets',
				img: require('@/assets/images/projects/chat.png'),
			},
			{
				id: 2,
				title: 'Chat con WebSockets',
				img: require('@/assets/images/projects/chat/chat3.png'),
			},
			{
				id: 3,
				title: 'Chat con WebSockets',
				img: require('@/assets/images/projects/chat/chat4.png'),
			},
		],
		projectInfo: {
			clientHeading: 'Sobre el Cliente',
			companyInfos: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Randy',
				},
				{
					id: 2,
					title: 'Servicios',
					details: 'Desarrollo de un Chat',
				},
				{
					id: 3,
					title: 'Sitio Web',
					details: 'https://websocketsimplechatnestjs-production.up.railway.app',
				},
				{
					id: 4,
					title: 'Telefono',
					details: '(849) 858-2406',
				},
			],
			objectivesHeading: 'Objetivo',
			objectivesDetails: 'El objetivo principal es proporcionar una comunicación en tiempo real y bidireccional entre cliente y servidore a través de la web.',
			technologies: [
				{
					title: 'Herramientas & Tecnologías',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Nest.js',
						'TypeScript',
						'Socket.io',
						'WebSockets',
					],
				},
			],
			projectDetailsHeading: 'Descripción del proyecto',
			projectDetails: [
				{
					id: 1,
					details: 'WebSocketChat es una innovadora aplicación de chat que ha revolucionado la forma en que las personas se comunican en línea. Diseñada con una interfaz moderna y amigable, WebSocketChat ofrece a los usuarios una plataforma de mensajería instantánea que va más allá de la simple transmisión de mensajes. Con la integración de la tecnología de websockets, esta aplicación proporciona una experiencia de chat en tiempo real que supera las limitaciones de las soluciones convencionales.',
				},
				{
					id: 2,
					details: 'La característica distintiva de WebSocketChat radica en su capacidad para mantener conexiones persistentes entre los usuarios, permitiendo una comunicación instantánea y sin interrupciones. La interfaz limpia y organizada facilita la navegación, mientras que las funciones avanzadas ofrecen a los usuarios un amplio abanico de opciones para personalizar su experiencia.',
				},
				{
					id: 3,
					details: 'WebSocketChat representa la evolución de las aplicaciones de chat, combinando la velocidad y la eficiencia de la comunicación en tiempo real con una interfaz amigable y características avanzadas. Ya sea para conversaciones casuales, trabajo en equipo o la creación de comunidades en línea, WebSocketChat se posiciona como la elección preferida para aquellos que buscan una experiencia de chat sin igual.',
				},
			],
			socialSharingsHeading: 'LinkedIn y Codigo Fuente',
			socialSharings: [
				{
					id: 1,
					name: 'randymxd06',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/randymxd06/',
				},
				{
					id: 2,
					name: 'Websocket_SimpleChat_NestJS',
					icon: 'github',
					url: 'https://github.com/randymxd06/Websocket_SimpleChat_NestJS',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Otros Proyectos',
			relatedProjects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: require('@/assets/images/mobile-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Web Application',
					img: require('@/assets/images/web-project-1.jpg'),
				},
				{
					id: 3,
					title: 'UI Design',
					img: require('@/assets/images/ui-project-2.jpg'),
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
		},
	},
	{
		id: 2,
		title: 'Juego de Pokémon',
		category: 'Aplicación Web',
		img: require('@/assets/images/projects/pokemon.png'),
		singleProjectHeader: {
			singleProjectTitle: 'Juego de Pokémon',
			singleProjectDate: 'Ene 09, 2024',
			singleProjectTag: 'Aplicación Web',
		},
		projectImages: [
			{
				id: 1,
				title: 'Juego de Pokémon',
				img: require('@/assets/images/projects/pokemon.png'),
			},
			{
				id: 2,
				title: 'Juego de Pokémon',
				img: require('@/assets/images/projects/pokemon/pokemon2.png'),
			},
			{
				id: 3,
				title: 'Juego de Pokémon',
				img: require('@/assets/images/projects/pokemon/pokemon3.png'),
			},
		],
		projectInfo: {
			clientHeading: 'Sobre el Cliente',
			companyInfos: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Randy',
				},
				{
					id: 2,
					title: 'Servicios',
					details: 'Desarrollo de un Juego de Pokemon',
				},
				{
					id: 3,
					title: 'Sitio Web',
					details: 'https://pokemongamer.netlify.app',
				},
				{
					id: 4,
					title: 'Telefono',
					details: '(849) 858-2406',
				},
			],
			objectivesHeading: 'Objetivo',
			objectivesDetails: 'El objetivo principal de un juego de adivinanzas de Pokémon podría variar según el diseño específico del juego, pero en general, el propósito sería desafiar a los jugadores a adivinar o identificar diferentes Pokémon a partir de pistas, imágenes, descripciones o cualquier otro medio utilizado en el juego.',
			technologies: [
				{
					title: 'Herramientas & Tecnologías',
					techs: [
						'Vue.js',
						'Pokemon API',
					],
				},
			],
			projectDetailsHeading: 'Descripción del proyecto',
			projectDetails: [
				{
					id: 1,
					details: 'Este juego ofrece a los jugadores una experiencia envolvente y educativa al presentarles una variedad de desafíos adivinatorios. Los participantes pueden encontrarse con imágenes parciales, sombras misteriosas, o incluso descripciones detalladas de Pokémon específicos. La premisa es simple pero cautivadora: identificar correctamente el Pokémon en cuestión a partir de estas pistas.',
				},
				{
					id: 2,
					details: 'Los jugadores pueden explorar diferentes modos de juego, desde desafíos cronometrados que ponen a prueba la velocidad de reconocimiento hasta modalidades más relajadas que fomentan la reflexión y el aprendizaje. Además, el juego podría incluir un sistema de niveles o logros para recompensar la progresión y mantener el interés a lo largo del tiempo.',
				},
				{
					id: 3,
					details: 'Para hacer la experiencia aún más emocionante, el juego podría incorporar elementos sociales, permitiendo a los jugadores competir entre ellos, formar equipos para resolver desafíos más difíciles o compartir sus logros en las redes sociales. También podría ofrecer actualizaciones periódicas con nuevas generaciones de Pokémon o desafíos temáticos, manteniendo el contenido fresco y relevante.',
				},
			],
			socialSharingsHeading: 'LinkedIn y Codigo Fuente',
			socialSharings: [
				{
					id: 1,
					name: 'randymxd06',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/randymxd06/',
				},
				{
					id: 2,
					name: 'Pokemon_Game_VueJS',
					icon: 'github',
					url: 'https://github.com/randymxd06/Pokemon_Game_VueJS',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Otros Proyectos',
			relatedProjects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: require('@/assets/images/mobile-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Web Application',
					img: require('@/assets/images/web-project-1.jpg'),
				},
				{
					id: 3,
					title: 'UI Design',
					img: require('@/assets/images/ui-project-2.jpg'),
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
		},
	},
	{
		id: 3,
		title: 'Aplicación de Mapas',
		category: 'Aplicación Web',
		img: require('@/assets/images/projects/maps.png'),
		singleProjectHeader: {
			singleProjectTitle: 'Aplicación de Mapas',
			singleProjectDate: 'Ene 09, 2024',
			singleProjectTag: 'Aplicación Web',
		},
		projectImages: [
			{
				id: 1,
				title: 'Aplicación de Mapas',
				img: require('@/assets/images/projects/maps.png'),
			},
			{
				id: 2,
				title: 'Aplicación de Mapas',
				img: require('@/assets/images/projects/maps/maps2.png'),
			},
			{
				id: 3,
				title: 'Aplicación de Mapas',
				img: require('@/assets/images/projects/maps/maps3.png'),
			},
		],
		projectInfo: {
			clientHeading: 'Sobre el Cliente',
			companyInfos: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Randy',
				},
				{
					id: 2,
					title: 'Servicios',
					details: 'Desarrollo Aplicación de Mapas',
				},
				{
					id: 3,
					title: 'Sitio Web',
					details: 'https://mapsappr.netlify.app',
				},
				{
					id: 4,
					title: 'Telefono',
					details: '(849) 858-2406',
				},
			],
			objectivesHeading: 'Objetivo',
			objectivesDetails: 'La aplicación de mapas tiene como objetivo principal proporcionar a los usuarios herramientas para explorar, navegar y encontrar información sobre el mundo que les rodea, facilitando así la toma de decisiones en sus desplazamientos diarios o viajes.',
			technologies: [
				{
					title: 'Herramientas & Tecnologías',
					techs: [
						'Vue.js',
						'TypeScript',
						'Mapbox API',
					],
				},
			],
			projectDetailsHeading: 'Descripción del proyecto',
			projectDetails: [
				{
					id: 1,
					details: 'Bienvenido a nuestra aplicación de mapas, una herramienta completa que transforma la manera en que te relacionas con el mundo que te rodea. Diseñada con la última tecnología cartográfica y una interfaz intuitiva, nuestra aplicación está destinada a simplificar tus viajes diarios, exploraciones y descubrimientos en nuevas tierras.',
				},
				{
					id: 2,
					details: 'Nuestra aplicación ofrece un sistema de navegación avanzado que va más allá de las simples direcciones. Proporciona rutas detalladas en tiempo real, condiciones del camino y opciones alternativas para asegurar que llegues a tu destino de la manera más eficiente y rápida posible. Olvídate de los atascos gracias a nuestras actualizaciones en tiempo real sobre el tráfico y las sugerencias de rutas alternativas.',
				},
				{
					id: 3,
					details: 'Nuestra aplicación de mapas es tu compañero indispensable para explorar el mundo. Ya sea que estés planificando una ruta, buscando nuevos lugares para disfrutar o simplemente curioseando, nuestra aplicación está diseñada para hacerte la vida más fácil y emocionante a medida que te aventuras en el mundo que te rodea. ¡Descárgala hoy y empieza tu próxima gran aventura!',
				},
				
			],
			socialSharingsHeading: 'LinkedIn y Codigo Fuente',
			socialSharings: [
				{
					id: 1,
					name: 'randymxd06',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/randymxd06/',
				},
				{
					id: 2,
					name: 'Maps_App_VueJS',
					icon: 'github',
					url: 'https://github.com/randymxd06/Maps_App_VueJS',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Otros Proyectos',
			relatedProjects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: require('@/assets/images/mobile-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Web Application',
					img: require('@/assets/images/web-project-1.jpg'),
				},
				{
					id: 3,
					title: 'UI Design',
					img: require('@/assets/images/ui-project-2.jpg'),
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
		},
	},
	{
		id: 4,
		title: 'Página de Recetas',
		category: 'Página Web',
		img: require('@/assets/images/projects/recipes.png'),
		singleProjectHeader: {
			singleProjectTitle: 'Página de Recetas',
			singleProjectDate: 'Ene 01, 2024',
			singleProjectTag: 'Página Web',
		},
		projectImages: [
			{
				id: 1,
				title: 'Pagina de Recetas',
				img: require('@/assets/images/projects/recipes/recipes2.png'),
			},
			{
				id: 2,
				title: 'Pagina de Recetas',
				img: require('@/assets/images/projects/recipes/recipes3.png'),
			},
			{
				id: 3,
				title: 'Pagina de Recetas',
				img: require('@/assets/images/projects/recipes/recipes4.png'),
			},
			{
				id: 4,
				title: 'Pagina de Recetas',
				img: require('@/assets/images/projects/recipes/recipes5.png'),
			},
			{
				id: 5,
				title: 'Pagina de Recetas',
				img: require('@/assets/images/projects/recipes/recipes6.png'),
			},
			{
				id: 6,
				title: 'Pagina de Recetas',
				img: require('@/assets/images/projects/recipes/recipes7.png'),
			},
			{
				id: 7,
				title: 'Pagina de Recetas',
				img: require('@/assets/images/projects/recipes/recipes8.png'),
			},
			{
				id: 8,
				title: 'Pagina de Recetas',
				img: require('@/assets/images/projects/recipes/recipes9.png'),
			},
			{
				id: 9,
				title: 'Pagina de Recetas',
				img: require('@/assets/images/projects/recipes/recipes10.png'),
			},
		],
		projectInfo: {
			clientHeading: 'Sobre el Cliente',
			companyInfos: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Randy',
				},
				{
					id: 2,
					title: 'Servicios',
					details: 'Desarrollo de Página Web',
				},
				{
					id: 3,
					title: 'Sitio Web',
					details: 'https://randyrecipes.000webhostapp.com/index.php',
				},
				{
					id: 4,
					title: 'Telefono',
					details: '(849) 858-2406',
				},
			],
			objectivesHeading: 'Objetivo',
			objectivesDetails: 'El objetivo principal de una página web de recetas es proporcionar a los usuarios una plataforma en línea donde puedan acceder a una variedad de recetas de cocina para inspirarse, aprender nuevas habilidades culinarias y encontrar instrucciones detalladas para preparar platos deliciosos.',
			technologies: [
				{
					title: 'Herramientas & Tecnologías',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
						'Bootstrap 4.1',
					],
				},
			],
			projectDetailsHeading: 'Descripción del proyecto',
			projectDetails: [
				{
					id: 1,
					details: 'Bienvenido a "Randys Recipes", tu destino culinario en línea donde la pasión por la comida se combina con la creatividad y la comunidad. En nuestro portal, te sumergirás en un mundo de sabores, texturas y colores, descubriendo un sinfín de recetas que van desde clásicos reconfortantes hasta platos innovadores que despiertan tu paladar.',
				},
				{
					id: 2,
					details: 'Nuestra extensa biblioteca de recetas está diseñada para satisfacer todos los gustos y necesidades. Desde desayunos saludables y almuerzos reconfortantes hasta cenas gourmet y postres indulgentes, "Randys Recipes" ofrece una amplia variedad para cada ocasión y preferencia. Clasificadas de manera intuitiva, las recetas son fácilmente accesibles según el tipo de cocina, nivel de dificultad, tiempo de preparación y dietas específicas, para que encuentres la inspiración que estás buscando.',
				},
				{
					id: 3,
					details: 'Cada receta viene acompañada de instrucciones detalladas, desde la lista de ingredientes hasta el paso a paso del proceso de preparación. Nuestra misión es guiarte a través de cada etapa, brindándote la confianza para llevar tus habilidades culinarias al siguiente nivel. Además, nuestras imágenes de alta resolución y videos cautivadores te sumergen visualmente en el mundo de la cocina, haciendo que cada receta sea una experiencia completa.',
				},
			],
			socialSharingsHeading: 'LinkedIn y Codigo Fuente',
			socialSharings: [
				{
					id: 1,
					name: 'randymxd06',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/randymxd06/',
				},
				{
					id: 2,
					name: 'Randys_Recipes_2.0',
					icon: 'github',
					url: 'https://github.com/randymxd06/Randys_Recipes_2.0',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Otros Proyectos',
			relatedProjects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: require('@/assets/images/mobile-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Web Application',
					img: require('@/assets/images/web-project-1.jpg'),
				},
				{
					id: 3,
					title: 'UI Design',
					img: require('@/assets/images/ui-project-2.jpg'),
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
		},
	},
	{
		id: 5,
		title: 'Página de Conejos',
		category: 'Página Web',
		img: require('@/assets/images/projects/rabbits.png'),
		singleProjectHeader: {
			singleProjectTitle: 'Página de Conejos',
			singleProjectDate: 'Ene 01, 2024',
			singleProjectTag: 'Página Web',
		},
		projectImages: [
			{
				id: 1,
				title: 'Pagina de Conejos',
				img: require('@/assets/images/projects/rabbits/rabbits2.png'),
			},
			{
				id: 2,
				title: 'Pagina de Conejos',
				img: require('@/assets/images/projects/rabbits/rabbits3.png'),
			},
			{
				id: 3,
				title: 'Pagina de Conejos',
				img: require('@/assets/images/projects/rabbits/rabbits4.png'),
			},
		],
		projectInfo: {
			clientHeading: 'Sobre el Cliente',
			companyInfos: [
				{
					id: 1,
					title: 'Nombre',
					details: 'Randy',
				},
				{
					id: 2,
					title: 'Servicios',
					details: 'Desarrollo de Página Web',
				},
				{
					id: 3,
					title: 'Sitio Web',
					details: 'https://conejitosr.netlify.app',
				},
				{
					id: 4,
					title: 'Telefono',
					details: '(849) 858-2406',
				},
			],
			objectivesHeading: 'Objetivo',
			objectivesDetails: 'Recientemente, diseñé y desarrollé una encantadora página web dedicada a los conejos, donde utilicé diversas tecnologías para mejorar la experiencia del usuario. Implementé ScrollReveal para crear transiciones suaves al hacer scroll, Materialize para un diseño responsivo y moderno, y añadí un efecto parallax que proporciona un toque visualmente atractivo.',
			technologies: [
				{
					title: 'Herramientas & Tecnologías',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Materialize CSS',
						'Bootstrap 4.1',
						'Parallax',
						'ScrollReveal.js',
					],
				},
			],
			projectDetailsHeading: 'Descripción del proyecto',
			projectDetails: [
				{
					id: 1,
					details: 'Me complace compartir mi última creación: una cautivadora página web dedicada al fascinante mundo de los conejos. Mi objetivo al desarrollar esta página fue ofrecer una experiencia visualmente impactante y agradable para los visitantes, y para lograrlo, incorporé diversas tecnologías y efectos que hacen que la página sea única.',
				},
				{
					id: 2,
					details: 'En primer lugar, utilicé ScrollReveal para añadir un toque de elegancia a la navegación. Esta biblioteca de JavaScript permite crear transiciones suaves y animaciones al hacer scroll, revelando gradualmente elementos clave de la página a medida que el usuario se desplaza hacia abajo. La sensación de descubrimiento proporcionada por ScrollReveal contribuye a la inmersión del usuario, haciéndola más atractiva y memorable.',
				},
				{
					id: 3,
					details: 'Además, para garantizar una experiencia de usuario moderna y completamente responsiva, integré el framework Materialize en el diseño de la página. Materialize no solo facilita la creación de un diseño estéticamente agradable, sino que también garantiza que la página sea fácilmente accesible y funcional en una variedad de dispositivos, desde computadoras de escritorio hasta dispositivos móviles.',
				},
				{
					id: 4,
					details: 'En conjunto, la combinación de ScrollReveal, Materialize y el efecto parallax crea una experiencia de navegación que va más allá de la simple presentación de información. La página web de conejos no solo ofrece contenido informativo, sino que también busca cautivar y entretener a los visitantes, proporcionando una experiencia memorable y única.',
				},
			],
			socialSharingsHeading: 'LinkedIn y Codigo Fuente',
			socialSharings: [
				{
					id: 1,
					name: 'randymxd06',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/randymxd06/',
				},
				{
					id: 2,
					name: 'Conejitos_Page',
					icon: 'github',
					url: 'https://github.com/randymxd06/Conejitos_Page',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Otros Proyectos',
			relatedProjects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: require('@/assets/images/mobile-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Web Application',
					img: require('@/assets/images/web-project-1.jpg'),
				},
				{
					id: 3,
					title: 'UI Design',
					img: require('@/assets/images/ui-project-2.jpg'),
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
		},
	},
];

export default projects;
