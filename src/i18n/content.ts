// All site copy lives here, per language. Luna edits text & prices here, no layout changes needed.
export const LOCALES = ['ru', 'es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ru';
export const RETREAT_START = '2026-08-13T00:00:00';

// Gallery: Luna edits this list — drop files into public/gallery/ and add filenames here.
// null = elegant placeholder slot. 6–9 items recommended.
export const GALLERY_IMAGES: (string | null)[] = [
  'gallery/g1.jpg',
  'gallery/g2.jpg',
  'gallery/g3.jpg',
  'gallery/g4.jpg',
  null,
  null,
  null,
  null,
];

export const content = {
  ru: {
    htmlLang: 'ru',
    meta: {
      title: 'Женский теннисный ретрит на Коста-Браве · 13–16 августа',
      description:
        '4 дня тенниса, моря и сильной женской компании на берегу Коста-Бравы. Вилла у воды, личный шеф, яхта, йога, хайкинг и финальный турнир на исторических кортах La Gavina.',
    },
    nav: {
      brand: 'Luna',
      links: [
        { href: '#concept', label: 'Концепция' },
        { href: '#experience', label: 'Опыт' },
        { href: '#mentors', label: 'Наставники' },
        { href: '#program', label: 'Программа' },
        { href: '#pricing', label: 'Цена' },
        { href: '#faq', label: 'FAQ' },
      ],
      cta: 'Забронировать',
    },
    hero: {
      eyebrow: 'Частный женский ретрит',
      title: 'Женский теннисный ретрит на берегу Коста-Бравы',
      subtitle:
        '4 дня тенниса, моря и сильной женской компании. Вилла у воды, личный шеф, яхта, йога и хайкинг — и круг женщин, ради которого стоит приехать.',
      facts: ['13–16 августа', '4 дня / 3 ночи', 'до 8 женщин', 'Costa Brava'],
      priceOld: '€3200', priceNew: '€2800',
      slogan: { main: '«Сила без надрыва»', art: 'Play, not push' },
      ctaPrimary: 'Забронировать место', ctaSecondary: 'Смотреть программу',
      countdown: { days: 'Дней', hours: 'Часов', minutes: 'Минут', seconds: 'Секунд' },
    },
    audience: {
      eyebrow: 'Для кого этот ретрит',
      title: 'Для женщин, которые привыкли добиваться — и хотят научиться делать это бережно к себе',
      lead: 'Амбициозные женщины, которые живут на высоких оборотах и хотят перезагрузку без потери темпа.',
      checkTitle: 'Это про тебя, если',
      checks: [
        'Ты привыкла добиваться через усилие — и устала жить на пределе',
        'Хочешь восстановиться, не сбавляя хода',
        'Ищешь среду равных: сильный женский круг без случайных людей',
        'Всегда хотела попробовать теннис — но не решалась начать',
        'Ценишь камерность, вкус и приватность',
      ],
      closing: 'Приватная группа. Собранная вручную, для своих.',
      founders: {
        luna: {
          name: 'Luna', role: 'Основательница',
          photo: 'founders/luna.jpg', photoSlot: 'IMG: Luna — портрет · вертикаль',
          voice: [
            'Я сама фаундер и спортсменка. Теннис — моя большая любовь: это то, где я забываю про «надо» и просто играю. И я слишком хорошо знаю обратное состояние — когда добиваешься всего через «соберись», пока не забываешь, каково это — играть.',
            'Мы играем каждый день — это сердце ретрита. Но мне не хотелось делать «кэмп». Хотелось собрать круг женщин, рядом с которыми растёшь — на корте и в жизни.',
          ],
        },
        polina: {
          name: 'Полина', role: 'Соосновательница · бизнес-психолог',
          photo: 'founders/polina.jpg', photoSlot: 'IMG: Полина — портрет · вертикаль',
          voice: [
            'Я много лет работаю с женщинами и вижу одно и то же: мы научились достигать, но разучились делать это бережно к себе. Живём на выдохе, который всё не наступает.',
            'На корте есть простая правда: лучший удар рождается из свободного тела, а не из зажатого. Моя часть ретрита — про то же, но вне корта. Как оставаться сильной, не выжигая себя. Как замедлиться — и не почувствовать себя от этого слабой.',
            'Это не работа над собой из «надо». Это возвращение к себе настоящей.',
          ],
        },
        joint: {
          title: 'Играть, а не выживать.',
          body: 'Мы собрали этот ретрит для женщин, которые привыкли добиваться результатов усилием — и хотят вспомнить, что сила приходит из свободы, а не из напряжения. На корте и в жизни: лучший удар рождается из свободного тела.',
          art: 'Play, not push',
          video: 'founders/founders.mp4', poster: 'founders/founders-poster.jpg',
        },
      },
    },
    concept: {
      eyebrow: 'Концепция',
      title: 'Это не обычный теннис-кэмп.',
      body: 'Место, где сильные женщины наконец выдыхают. Теннис, забота о теле, природа и среда равных — без суеты и случайных людей.',
      tags: ['Теннис', 'Йога', 'Медитация', 'Strong Network', 'Бизнес-психология', 'Slow Luxury', 'Восстановление', 'Яхта', 'Природа'],
      note: 'Приватная группа. Только те, с кем хочется расти вместе — на корте и в жизни.',
    },
    experience: {
      eyebrow: 'Опыт',
      title: 'Шесть способов прожить эти дни',
      cards: [
        { icon: '🎾', title: 'Теннис', text: 'Ежедневные тренировки и персональная работа с тренером. Финал — мини-турнир на винтажных кортах La Gavina, где в теннис играют с 1930-х.' },
        { icon: '🧘', title: 'Йога', text: 'Утренние практики у воды: дыхание, мягкое движение, тишина — вернуть телу лёгкость, прежде чем день наберёт темп.' },
        { icon: '⛵', title: 'День на яхте', text: 'Закрытые пляжи и скрытые бухты, до которых не добраться по суше — только с яхты. Купание в открытом море.' },
        { icon: '🥾', title: 'Хайкинг', text: 'Camí de Ronda: морские скалы, сосны и виды побережья.' },
        { icon: '🎬', title: 'Контент-день', text: 'С нами профессиональный видеограф: съёмка в день йоги и турнира. Уедете с кинематографичными кадрами себя — в игре и в моменте.' },
        { icon: '🌅', title: 'Ужины на закате', text: 'Меню от шеф-повара, продуманное до мелочей — локально, красиво и с заботой о теле.' },
      ],
      highlight: { tag: 'Гранд-финал', title: 'Турнир на кортах La Gavina', text: 'Финал на легендарных винтажных грунтовых кортах у моря в S’Agaró, где играли профи и звёзды эпохи.' },
    },
    mentors: {
      eyebrow: 'Наставники',
      title: 'Личная работа с мастерами своего дела',
      people: [
        {
          name: 'Степан', role: 'Теннисный тренер',
          photo: 'mentors/stepan.jpg', photoSlot: 'IMG: coach — портрет Степана · 4:5',
          facts: ['13 лет на корте', '200+ учениц', '№72 в России · юниоры', 'Частная подготовка'],
          bio: 'Профессиональная школа и индивидуальная постановка игры. На ретрите — ежедневная персональная работа на корте и финальный турнир на исторических кортах La Gavina. Уровень выстраивается под каждую: от первого выхода на корт до уверенной подачи.',
        },
        {
          name: 'Яна', role: 'Йога и дыхательные практики',
          photo: 'mentors/yana.jpg', photoSlot: 'IMG: yana — портрет Яны · 4:5',
          facts: ['Утренние практики', 'Дыхание', 'Восстановление'],
          bio: 'Тихая дверь ретрита: утренние практики у воды и дыхание — мягко открывать день и возвращать тело после корта.',
        },
      ],
    },
    program: {
      eyebrow: 'Программа',
      title: 'Четыре дня, выстроенные',
      days: [
        { n: '01', title: 'Прибытие', text: 'Выезд из Барселоны. Велком-дринк на вилле и обед-знакомство — первый круг за общим столом. Заселение, первый выход на корт. Закат и ужин под открытым небом.' },
        { n: '02', title: 'Море', text: 'Медитация и медленный завтрак. Выход на яхте вдоль побережья: скрытые бухты, купание, обед у воды. Теннис во второй половине дня. Неспешный ужин от шефа.' },
        { n: '03', title: 'Игра', text: 'Утренняя йога и завтрак. Турнир на легендарных кортах La Gavina, затем обед в живописном S’Agaró. Восстановление, мастермайнд с бизнес-психологом. Secret dinner — в завершение дня.' },
        { n: '04', title: 'Возвращение', text: 'Лёгкий завтрак и хайкинг по побережью. Обед на вилле, финальная отработка ударов на корте. Выезд в Барселону.' },
      ],
    },
    reviews: {
      eyebrow: 'Отзывы',
      title: 'Слова участниц',
      people: [
        { name: 'Катя', role: 'Фуд-блогер', handle: '@katyafoodlover', url: 'https://www.instagram.com/katyafoodlover', photo: 'reviews/katya.jpg', text: 'У меня уже был небольшой опыт занятий теннисом до этого ретрита, но всё равно внутри были переживания насчёт моего уровня. Честно говоря, боялась выглядеть глупо. Но мои опасения оказались напрасными: тренер объяснял всё так, что за эти дни мой уровень игры значительно улучшился. И никто друг друга не оценивал — атмосфера была очень дружественная и поддерживающая. Это оказалось самым важным для меня.', photoSlot: 'IMG: Катя · аватар' },
        { name: 'Наташа', role: 'Фотограф', handle: '@nata_ph1', url: 'https://www.instagram.com/nata_ph1', photo: 'reviews/natasha.jpg', text: 'Если честно, я ехала за красивой картинкой и отдыхом на море, но получила гораздо больше. Наши мастермайнды и разговоры дали мне больше, чем другие бизнес-выезды. При этом мы ещё и отдыхали, занимались спортом. Такое сочетание я нигде не встречала.', photoSlot: 'IMG: Наташа · аватар' },
        { name: 'Алина', role: '', handle: '@stylenotstale', url: 'https://www.instagram.com/stylenotstale', photo: 'reviews/alina.jpg', text: 'Я привыкла считать, стоит ли что-то своих денег. И этот ретрит стоил каждого евро. После него я вернулась не просто отдохнувшей, а с ясной головой, новыми связями и ощущением, что я наконец выдохнула. Уже жду следующий.', photoSlot: 'IMG: Алина · аватар' },
      ],
    },
    gallery: { eyebrow: 'Галерея', title: 'Кадры из нашей жизни', slot: 'Фото скоро' },
    pricing: {
      eyebrow: 'Цена',
      title: 'Первая основательная когорта',
      priceOld: '€3200', priceNew: '€2800',
      // ↓ дедлайн цены — Luna правит только эту строку
      priceDeadline: 'Цена действует до 23 июля',
      priceNote: 'после этой даты цена вырастет',
      lines: ['Депозит €500 фиксирует место, остаток до 1 августа', 'Можно разбить на 2 платежа'],
      includedTitle: 'Что входит',
      included: ['Проживание на вилле, 3 ночи', 'Теннис с тренером + мини-турнир', 'Финальный турнир на кортах La Gavina (S’Agaró)', 'Йога', 'День на яхте', 'Хайкинг', 'Все приёмы пищи от личного шефа', 'Лекция и НЛП-практики Полины + сессия после', 'Фото- и видео-контент', 'Трансферы из/в Барселону'],
      notIncludedTitle: 'Что не входит',
      notIncluded: ['Перелёт/дорога до Барселоны', 'Страховка', 'Личные расходы', 'Алкоголь', 'Доп. активности (напр. джет-ски)'],
      cta: 'Забронировать место',
    },
    faq: {
      eyebrow: 'Вопросы',
      title: 'Коротко о важном',
      items: [
        { q: 'Какой нужен уровень тенниса?', a: 'Любой — игры и группы подбираются по уровню, тренер уточнит уровень заранее.' },
        { q: 'Кто будет в группе?', a: 'Маленькая камерная группа амбициозных женщин, собирается вручную; вайб — предпринимательницы и профессионалки.' },
        { q: 'Где будем жить?', a: 'Частная вилла у моря на Коста-Браве с кортами; точный адрес — подтверждённым участницам.' },
        { q: 'Как и где едим?', a: 'Личный шеф, полный пансион; учитываем аллергии и предпочтения.' },
        { q: 'Как добраться?', a: 'Старт из Барселоны, трансфер включён; ближайший аэропорт — BCN.' },
        { q: 'Оплата и рассрочка?', a: 'Депозит €500 фиксирует место, остаток до 1 августа; можно в 2 платежа.' },
      ],
    },
    apply: {
      eyebrow: 'Заявка',
      title: 'Забронируй место в первой когорте',
      micro: 'Мы напишем тебе в Telegram в течение дня.',
      fields: { name: 'Имя', contact: 'Telegram или телефон', level: 'Уровень тенниса', levelOpts: ['с нуля', 'новичок', 'любитель', 'уверенный'], party: 'Еду', partyOpts: ['одна', 'с подругой'], comment: 'Комментарий (необязательно)' },
      submit: 'Отправить заявку',
      success: 'Заявка отправлена — мы свяжемся с тобой в течение дня.',
      error: 'Не получилось отправить. Попробуй ещё раз или напиши нам напрямую.',
      orContact: 'или напишите напрямую',
    },
    footer: { tagline: 'Женский теннисный ретрит · Costa Brava · 13–16 августа', rights: 'Luna Retreat' },
  },

  es: {
    htmlLang: 'es',
    meta: {
      title: 'Retiro de tenis femenino en la Costa Brava · 13–16 de agosto',
      description:
        '4 días de tenis, mar y una comunidad femenina poderosa en la Costa Brava. Villa frente al mar, chef privado, yate, yoga, senderismo y un torneo final en las históricas pistas de La Gavina.',
    },
    nav: {
      brand: 'Luna',
      links: [
        { href: '#concept', label: 'Concepto' },
        { href: '#experience', label: 'Experiencia' },
        { href: '#mentors', label: 'Mentores' },
        { href: '#program', label: 'Programa' },
        { href: '#pricing', label: 'Precio' },
        { href: '#faq', label: 'FAQ' },
      ],
      cta: 'Reservar',
    },
    hero: {
      eyebrow: 'Un retiro privado para mujeres',
      title: 'Retiro de tenis femenino en la Costa Brava',
      subtitle:
        '4 días de tenis, mar y una comunidad femenina poderosa. Villa frente al mar, chef privado, yate, yoga y senderismo — y un círculo de mujeres por el que vale la pena venir.',
      facts: ['13–16 de agosto', '4 días / 3 noches', 'hasta 8 mujeres', 'Costa Brava'],
      priceOld: '€3200', priceNew: '€2800',
      slogan: { main: '«Fuerza sin desgaste»', art: 'Play, not push' },
      ctaPrimary: 'Reservar mi plaza', ctaSecondary: 'Ver el programa',
      countdown: { days: 'Días', hours: 'Horas', minutes: 'Minutos', seconds: 'Segundos' },
    },
    audience: {
      eyebrow: 'Para quién es este retiro',
      title: 'Para mujeres acostumbradas a lograr — que quieren aprender a hacerlo cuidándose',
      lead: 'Mujeres ambiciosas que viven a altas revoluciones y quieren un reinicio sin perder el ritmo.',
      checkTitle: 'Es para ti si',
      checks: [
        'Estás acostumbrada a lograrlo todo con esfuerzo — y cansada de vivir al límite',
        'Quieres recuperarte sin bajar el ritmo',
        'Buscas un entorno de iguales: un círculo femenino fuerte, sin gente al azar',
        'Siempre quisiste probar el tenis — pero no te decidías a empezar',
        'Valoras la intimidad, el gusto y la privacidad',
      ],
      closing: 'Un grupo privado. Reunido a mano, para las nuestras.',
      founders: {
        luna: {
          name: 'Luna', role: 'Fundadora',
          photo: 'founders/luna.jpg', photoSlot: 'IMG: Luna — retrato · vertical',
          voice: [
            'Yo también soy fundadora y deportista. El tenis es mi gran amor: es donde olvido el «hay que» y simplemente juego. Y conozco demasiado bien el estado contrario — cuando lo consigues todo a base de «aguanta», hasta que olvidas lo que es jugar.',
            'Jugamos cada día — es el corazón del retiro. Pero no quería hacer un «campamento». Quería reunir un círculo de mujeres junto a las que creces — en la pista y en la vida.',
          ],
        },
        polina: {
          name: 'Polina', role: 'Cofundadora · psicóloga de negocios',
          photo: 'founders/polina.jpg', photoSlot: 'IMG: Polina — retrato · vertical',
          voice: [
            'Llevo años trabajando con mujeres y veo siempre lo mismo: aprendimos a lograr, pero olvidamos hacerlo cuidándonos. Vivimos en una exhalación que nunca llega.',
            'En la pista hay una verdad sencilla: el mejor golpe nace de un cuerpo libre, no de uno tenso. Mi parte del retiro trata de lo mismo, pero fuera de la pista. Cómo seguir siendo fuerte sin quemarte. Cómo bajar el ritmo sin sentirte débil por ello.',
            'No es trabajo personal desde el «hay que». Es volver a ti misma.',
          ],
        },
        joint: {
          title: 'Jugar, no sobrevivir.',
          body: 'Creamos este retiro para mujeres acostumbradas a lograr resultados a base de esfuerzo — y que quieren recordar que la fuerza nace de la libertad, no de la tensión. En la pista y en la vida: el mejor golpe nace de un cuerpo libre.',
          art: 'Play, not push',
          video: 'founders/founders.mp4', poster: 'founders/founders-poster.jpg',
        },
      },
    },
    concept: {
      eyebrow: 'Concepto',
      title: 'No es un campamento de tenis cualquiera.',
      body: 'Un lugar donde las mujeres fuertes por fin exhalan. Tenis, cuidado del cuerpo, naturaleza y un entorno de iguales — sin prisas ni gente al azar.',
      tags: ['Tenis', 'Yoga', 'Meditación', 'Strong Network', 'Psicología de negocios', 'Slow Luxury', 'Recuperación', 'Yate', 'Naturaleza'],
      note: 'Un grupo privado. Solo aquellas con quienes quieres crecer — en la pista y en la vida.',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Seis formas de vivir estos días',
      cards: [
        { icon: '🎾', title: 'Tenis', text: 'Entrenamientos diarios y trabajo personal con el entrenador. El final: un mini-torneo en las pistas vintage de La Gavina, donde se juega al tenis desde los años 30.' },
        { icon: '🧘', title: 'Yoga', text: 'Prácticas matutinas junto al agua: respiración, movimiento suave y silencio — devolverle ligereza al cuerpo antes de que el día tome ritmo.' },
        { icon: '⛵', title: 'Día en yate', text: 'Playas privadas y calas escondidas a las que no se llega por tierra — solo en yate. Baño en mar abierto.' },
        { icon: '🥾', title: 'Senderismo', text: 'Camí de Ronda: acantilados, pinos y vistas de la costa.' },
        { icon: '🎬', title: 'Día de contenido', text: 'Un videógrafo profesional nos acompaña: rodaje el día de yoga y del torneo. Te llevas imágenes cinematográficas de ti — en juego y en calma.' },
        { icon: '🌅', title: 'Cenas al atardecer', text: 'Un menú de nuestro chef pensado al detalle — local, bello y cuidadoso con el cuerpo.' },
      ],
      highlight: { tag: 'Gran final', title: 'Torneo en las pistas de La Gavina', text: 'Final en las legendarias pistas de tierra batida junto al mar en S’Agaró, donde jugaron profesionales y estrellas de la época.' },
    },
    mentors: {
      eyebrow: 'Mentores',
      title: 'Trabajo personal con maestros en su oficio',
      people: [
        { name: 'Stepan', role: 'Entrenador de tenis', photo: 'mentors/stepan.jpg', photoSlot: 'IMG: coach — retrato de Stepan · 4:5',
          facts: ['13 años en pista', '200+ alumnas', '#72 en Rusia · juniors', 'Preparación privada'],
          bio: 'Escuela profesional y puesta a punto individual del juego. En el retiro: trabajo personal diario en pista y el torneo final en las históricas pistas de La Gavina. El nivel se adapta a cada una: desde la primera vez en pista hasta un juego seguro.' },
        { name: 'Yana', role: 'Yoga y prácticas de respiración', photo: 'mentors/yana.jpg', photoSlot: 'IMG: yana — retrato de Yana · 4:5',
          facts: ['Prácticas matutinas', 'Respiración', 'Recuperación'],
          bio: 'La puerta silenciosa del retiro: prácticas matutinas junto al agua y respiración — abrir el día con suavidad y devolver el cuerpo después de la pista.' },
      ],
    },
    program: {
      eyebrow: 'Programa',
      title: 'Cuatro días, bien diseñados',
      days: [
        { n: '01', title: 'Llegada', text: 'Salida desde Barcelona. Welcome drink en la villa y comida de bienvenida — el primer círculo en torno a una mesa. Check-in y primera salida a la pista. Atardecer y cena al aire libre.' },
        { n: '02', title: 'Mar', text: 'Meditación y desayuno sin prisa. Salida en yate por la costa: calas escondidas, baño, comida junto al agua. Tenis por la tarde. Cena tranquila de nuestro chef.' },
        { n: '03', title: 'Juego', text: 'Yoga matutino y desayuno. Torneo en las legendarias pistas de La Gavina y comida en el pintoresco S’Agaró. Recuperación y mastermind con la psicóloga de negocios. Secret dinner para cerrar el día.' },
        { n: '04', title: 'Regreso', text: 'Desayuno ligero y senderismo por la costa. Comida en la villa, última sesión de golpes en pista. Salida hacia Barcelona.' },
      ],
    },
    reviews: {
      eyebrow: 'Opiniones',
      title: 'Palabras de las participantes',
      people: [
        { name: 'Katya', role: 'Food blogger', handle: '@katyafoodlover', url: 'https://www.instagram.com/katyafoodlover', photo: 'reviews/katya.jpg', text: 'Ya había jugado un poco al tenis antes del retiro, pero aun así me preocupaba mi nivel — sinceramente, temía parecer torpe. Mis miedos resultaron infundados: el entrenador explicaba todo de tal manera que en pocos días mi juego mejoró notablemente. Y nadie juzgaba a nadie: el ambiente era cálido y de apoyo. Eso fue lo más importante para mí.', photoSlot: 'IMG: Katya · avatar' },
        { name: 'Natasha', role: 'Fotógrafa', handle: '@nata_ph1', url: 'https://www.instagram.com/nata_ph1', photo: 'reviews/natasha.jpg', text: 'Sinceramente, vine por la imagen bonita y el descanso junto al mar — y recibí mucho más. Nuestros masterminds y conversaciones me dieron más que otros viajes de negocios. Y además descansamos e hicimos deporte. No he visto esa combinación en ningún otro sitio.', photoSlot: 'IMG: Natasha · avatar' },
        { name: 'Alina', role: '', handle: '@stylenotstale', url: 'https://www.instagram.com/stylenotstale', photo: 'reviews/alina.jpg', text: 'Estoy acostumbrada a calcular si algo vale su precio. Este retiro valió cada euro. Volví no solo descansada, sino con la cabeza clara, nuevos contactos y la sensación de por fin haber exhalado. Ya espero el siguiente.', photoSlot: 'IMG: Alina · avatar' },
      ],
    },
    gallery: { eyebrow: 'Galería', title: 'Escenas de nuestra vida', slot: 'Foto pronto' },
    pricing: {
      eyebrow: 'Precio',
      title: 'Primera cohorte fundacional',
      priceOld: '€3200', priceNew: '€2800',
      priceDeadline: 'Precio válido hasta el 23 de julio',
      priceNote: 'después de esa fecha el precio sube',
      lines: ['El depósito de €500 reserva la plaza; el resto, antes del 1 de agosto', 'Posibilidad de 2 pagos'],
      includedTitle: 'Incluye',
      included: ['Alojamiento en villa, 3 noches', 'Tenis con entrenador + mini-torneo', 'Torneo final en las pistas de La Gavina (S’Agaró)', 'Yoga', 'Día en yate', 'Senderismo', 'Todas las comidas del chef privado', 'Charla y PNL con Polina + sesión posterior', 'Contenido foto y vídeo', 'Traslados desde/hacia Barcelona'],
      notIncludedTitle: 'No incluye',
      notIncluded: ['Vuelo/viaje hasta Barcelona', 'Seguro', 'Gastos personales', 'Alcohol', 'Actividades extra (p. ej. jet ski)'],
      cta: 'Reservar mi plaza',
    },
    faq: {
      eyebrow: 'Preguntas',
      title: 'Lo importante, en breve',
      items: [
        { q: '¿Qué nivel de tenis necesito?', a: 'Cualquiera — los juegos y grupos se adaptan al nivel; el entrenador lo confirmará antes.' },
        { q: '¿Quién estará en el grupo?', a: 'Un grupo pequeño de mujeres ambiciosas, seleccionado a mano; emprendedoras y profesionales.' },
        { q: '¿Dónde nos alojamos?', a: 'Villa privada junto al mar en la Costa Brava con pistas; dirección exacta para participantes confirmadas.' },
        { q: '¿Cómo se come?', a: 'Chef privado, pensión completa; tenemos en cuenta alergias y preferencias.' },
        { q: '¿Cómo llegar?', a: 'Salida desde Barcelona, traslado incluido; aeropuerto más cercano: BCN.' },
        { q: '¿Pago y plazos?', a: 'El depósito de €500 reserva la plaza; el resto, antes del 1 de agosto. Posible en 2 pagos.' },
      ],
    },
    apply: {
      eyebrow: 'Reserva',
      title: 'Reserva tu plaza en la primera cohorte',
      micro: 'Te escribiremos por Telegram el mismo día.',
      fields: { name: 'Nombre', contact: 'Telegram o teléfono', level: 'Nivel de tenis', levelOpts: ['desde cero', 'principiante', 'aficionada', 'avanzada'], party: 'Voy', partyOpts: ['sola', 'con una amiga'], comment: 'Comentario (opcional)' },
      submit: 'Enviar solicitud',
      success: 'Solicitud enviada — te escribiremos hoy mismo.',
      error: 'No se pudo enviar. Inténtalo de nuevo, por favor.',
      orContact: 'o escríbenos directamente',
    },
    footer: { tagline: 'Retiro de tenis femenino · Costa Brava · 13–16 de agosto', rights: 'Luna Retreat' },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: "Women's Tennis Retreat on the Costa Brava · 13–16 August",
      description:
        "Four days of tennis, sea and a strong circle of women on the Costa Brava. A villa by the water, private chef, yacht, yoga, hiking and a final tournament on the historic courts of La Gavina.",
    },
    nav: {
      brand: 'Luna',
      links: [
        { href: '#concept', label: 'Concept' },
        { href: '#experience', label: 'Experience' },
        { href: '#mentors', label: 'Mentors' },
        { href: '#program', label: 'Programme' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#faq', label: 'FAQ' },
      ],
      cta: 'Reserve',
    },
    hero: {
      eyebrow: "A private women's retreat",
      title: "Women's tennis retreat on the Costa Brava",
      subtitle:
        'Four days of tennis, sea and a strong circle of women. A villa by the water, private chef, yacht, yoga and hiking — and the company that makes it worth the trip.',
      facts: ['13–16 August', '4 days / 3 nights', 'up to 8 women', 'Costa Brava'],
      priceOld: '€3200', priceNew: '€2800',
      slogan: { main: 'Strength, without the strain', art: 'Play, not push' },
      ctaPrimary: 'Reserve my place', ctaSecondary: 'See the programme',
      countdown: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
    },
    audience: {
      eyebrow: 'Who this retreat is for',
      title: 'For women used to achieving — who want to learn to do it gently',
      lead: 'Ambitious women living at high revs who want a reset without losing momentum.',
      checkTitle: 'This is for you if',
      checks: [
        "You're used to achieving through effort — and tired of living at the limit",
        'You want to recover without slowing down',
        'You seek a circle of equals: strong female company, no random people',
        'You’ve always wanted to try tennis — but never quite started',
        'You value intimacy, taste and privacy',
      ],
      closing: 'A private group. Hand-picked, for our own.',
      founders: {
        luna: {
          name: 'Luna', role: 'Founder',
          photo: 'founders/luna.jpg', photoSlot: 'IMG: Luna — portrait · vertical',
          voice: [
            "I'm a founder and an athlete myself. Tennis is my great love: it's where I forget the “musts” and simply play. And I know the opposite state all too well — achieving everything through “push through”, until you forget what playing feels like.",
            "We play every day — it's the heart of the retreat. But I didn't want to make a “camp”. I wanted to gather a circle of women you grow alongside — on the court and in life.",
          ],
        },
        polina: {
          name: 'Polina', role: 'Co-founder · business psychologist',
          photo: 'founders/polina.jpg', photoSlot: 'IMG: Polina — portrait · vertical',
          voice: [
            "I've worked with women for years and I see the same thing: we've learned to achieve, but forgotten how to do it gently. We live on an exhale that never comes.",
            "On court there's a simple truth: the best shot comes from a free body, not a tense one. My part of the retreat is about the same thing — off court. How to stay strong without burning yourself out. How to slow down without feeling weak for it.",
            "It's not self-work out of “must”. It's a return to your real self.",
          ],
        },
        joint: {
          title: 'Play, not survive.',
          body: 'We created this retreat for women used to achieving through effort — who want to remember that strength comes from freedom, not tension. On court and in life: the best shot comes from a free body.',
          art: 'Play, not push',
          video: 'founders/founders.mp4', poster: 'founders/founders-poster.jpg',
        },
      },
    },
    concept: {
      eyebrow: 'Concept',
      title: 'This is not your usual tennis camp.',
      body: 'A place where strong women finally exhale. Tennis, care for the body, nature and a circle of equals — no rush, no random people.',
      tags: ['Tennis', 'Yoga', 'Meditation', 'Strong Network', 'Business Psychology', 'Slow Luxury', 'Recovery', 'Yacht', 'Nature'],
      note: 'A private group. Only the women you want to grow with — on court and in life.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Six ways to live these days',
      cards: [
        { icon: '🎾', title: 'Tennis', text: 'Daily sessions and personal coaching. The finale: a mini-tournament on the vintage La Gavina courts, where tennis has been played since the 1930s.' },
        { icon: '🧘', title: 'Yoga', text: 'Morning practice by the water: breath, gentle movement and quiet — restoring lightness before the day picks up pace.' },
        { icon: '⛵', title: 'Yacht day', text: 'Private beaches and hidden coves you can only reach by yacht. Open-sea swimming off the board.' },
        { icon: '🥾', title: 'Hiking', text: 'Camí de Ronda: sea cliffs, pines and coastal views.' },
        { icon: '🎬', title: 'Content day', text: 'A professional videographer joins us: filming on yoga day and tournament day. You leave with cinematic footage of yourself — in play and at ease.' },
        { icon: '🌅', title: 'Sunset dinners', text: 'A chef-made menu considered down to the detail — local, beautiful and kind to the body.' },
      ],
      highlight: { tag: 'Grand finale', title: 'Tournament on the La Gavina courts', text: 'A final on the legendary vintage clay courts by the sea in S’Agaró, where pros and stars of the era once played.' },
    },
    mentors: {
      eyebrow: 'Mentors',
      title: 'Personal work with masters of their craft',
      people: [
        { name: 'Stepan', role: 'Tennis coach', photo: 'mentors/stepan.jpg', photoSlot: 'IMG: coach — portrait of Stepan · 4:5',
          facts: ['13 years on court', '200+ students', '#72 in Russia · juniors', 'Private coaching'],
          bio: 'A professional school and individual game-building. On the retreat: daily personal work on court and the final tournament on the historic La Gavina courts. The level is built around each guest — from a first time on court to a confident serve.' },
        { name: 'Yana', role: 'Yoga & breathwork', photo: 'mentors/yana.jpg', photoSlot: 'IMG: yana — portrait of Yana · 4:5',
          facts: ['Morning practice', 'Breathwork', 'Recovery'],
          bio: 'The quiet door of the retreat: morning practice by the water and breathwork — opening the day gently and restoring the body after the court.' },
      ],
    },
    program: {
      eyebrow: 'Programme',
      title: 'Four days, well designed',
      days: [
        { n: '01', title: 'Arrival', text: 'Departure from Barcelona. A welcome drink at the villa and a get-to-know lunch — the first circle around one table. Check-in and a first hour on court. Sunset and dinner in the open air.' },
        { n: '02', title: 'Sea', text: 'Meditation and a slow breakfast. A yacht day along the coast: hidden coves, swimming, lunch by the water. Tennis in the afternoon. An unhurried dinner by our chef.' },
        { n: '03', title: 'Play', text: 'Morning yoga and breakfast. A tournament on the legendary La Gavina courts, then lunch in picturesque S’Agaró. Recovery and a mastermind with the business psychologist. Secret dinner to close the day.' },
        { n: '04', title: 'Return', text: 'A light breakfast and a coastal hike. Lunch at the villa, a final hitting session on court. Departure for Barcelona.' },
      ],
    },
    reviews: {
      eyebrow: 'Reviews',
      title: 'In their words',
      people: [
        { name: 'Katya', role: 'Food blogger', handle: '@katyafoodlover', url: 'https://www.instagram.com/katyafoodlover', photo: 'reviews/katya.jpg', text: "I'd played a little tennis before this retreat, but I was still nervous about my level — honestly, I was afraid of looking silly. My fears turned out to be pointless: the coach explained everything in a way that noticeably lifted my game within days. And nobody judged anyone — the atmosphere was warm and supportive. That turned out to matter most.", photoSlot: 'IMG: Katya · avatar' },
        { name: 'Natasha', role: 'Photographer', handle: '@nata_ph1', url: 'https://www.instagram.com/nata_ph1', photo: 'reviews/natasha.jpg', text: "Honestly, I came for the beautiful setting and a seaside break — and got much more. Our masterminds and conversations gave me more than other business trips ever have. And we still rested and trained. I haven't seen that combination anywhere else.", photoSlot: 'IMG: Natasha · avatar' },
        { name: 'Alina', role: '', handle: '@stylenotstale', url: 'https://www.instagram.com/stylenotstale', photo: 'reviews/alina.jpg', text: "I'm used to weighing whether something is worth the money. This retreat was worth every euro. I came back not just rested — but with a clear head, new connections and the feeling that I'd finally exhaled. Already waiting for the next one.", photoSlot: 'IMG: Alina · avatar' },
      ],
    },
    gallery: { eyebrow: 'Gallery', title: 'Scenes from our life', slot: 'Photo soon' },
    pricing: {
      eyebrow: 'Pricing',
      title: 'First founding cohort',
      priceOld: '€3200', priceNew: '€2800',
      priceDeadline: 'This price holds until 23 July',
      priceNote: 'after that date the price goes up',
      lines: ['€500 deposit secures your place, balance by 1 August', 'Can be split into 2 payments'],
      includedTitle: 'Included',
      included: ['Villa accommodation, 3 nights', 'Tennis with a coach + mini-tournament', 'Final tournament on the La Gavina courts (S’Agaró)', 'Yoga', 'Yacht day', 'Hiking', 'All meals by the private chef', 'Talk & NLP with Polina + a session after', 'Photo & video content', 'Transfers to/from Barcelona'],
      notIncludedTitle: 'Not included',
      notIncluded: ['Flight/travel to Barcelona', 'Insurance', 'Personal expenses', 'Alcohol', 'Extra activities (e.g. jet ski)'],
      cta: 'Reserve my place',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'The essentials, briefly',
      items: [
        { q: 'What tennis level do I need?', a: 'Any — games and groups are matched to level; the coach will confirm yours in advance.' },
        { q: 'Who will be in the group?', a: 'A small, hand-picked group of ambitious women — founders and professionals.' },
        { q: 'Where do we stay?', a: 'A private villa by the sea on the Costa Brava with courts; exact address shared with confirmed guests.' },
        { q: 'How do we eat?', a: 'A private chef, full board; allergies and preferences taken into account.' },
        { q: 'How do I get there?', a: 'We start from Barcelona, transfer included; nearest airport is BCN.' },
        { q: 'Payment & instalments?', a: '€500 deposit secures your place, balance by 1 August; can be split into 2 payments.' },
      ],
    },
    apply: {
      eyebrow: 'Apply',
      title: 'Reserve your place in the first cohort',
      micro: 'We’ll message you on Telegram within a day.',
      fields: { name: 'Name', contact: 'Telegram or phone', level: 'Tennis level', levelOpts: ['from scratch', 'beginner', 'amateur', 'confident'], party: 'I’m coming', partyOpts: ['solo', 'with a friend'], comment: 'Comment (optional)' },
      submit: 'Send application',
      success: "Application sent — we'll message you within a day.",
      error: 'Something went wrong. Please try again.',
      orContact: 'or message us directly',
    },
    footer: { tagline: "Women's tennis retreat · Costa Brava · 13–16 August", rights: 'Luna Retreat' },
  },
} as const;

export function t(locale: Locale) { return content[locale]; }
