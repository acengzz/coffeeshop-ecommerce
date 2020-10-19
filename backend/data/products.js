const products = [
	{
		name:"Caffé Americano",
		image:'https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242',
		description:"Sıcak suyla doldurulan espresso çekimleri, derinlik ve nüans içeren bu harika derecede zengin fincanla sonuçlanan hafif bir krema tabakası oluşturur.",
		brand:'C.O.S',
		price:12.99,
		countInStock:15,
		rating:4,
		numReviews:12,
		category:"Americano"
	},
	{
		name:"Bianco Latte",
		image:'https://globalassets.starbucks.com/assets/049d23aac19047f4b3a40532cc24b510.jpg?impolicy=1by1_wide_1242',
		description:"Ev yapımı fındıklı pralin katkılı süt, küçük gerçek bir tatlı fındık sevgisi karakterimizle birleşti.",
		brand:'C.O.S',
		price:14.99,
		countInStock:15,
		rating:3.5,
		numReviews:4,
		category:"Latte"
	},
	{
		name:"Blonde Roast Coffee",
		image:'https://globalassets.starbucks.com/assets/abb4f97948c948c28ea2dcaf933c4f6b.jpg?impolicy=1by1_wide_1242',
		description:"Yumuşak, yumuşak ve lezzetli olan hafif kavrulmuş kahve. Tek başına kolay içilir ve süt, şeker veya vanilya, karamel veya fındık ile tatlandırılmış lezzetlidir.",
		brand:'C.O.S',
		price:13.99,
		countInStock:15,
		rating:4.5,
		numReviews:20,
		category:"Roasted"
	},
	{
		name:"Cacao Cloud Macchiato",
		image:'https://globalassets.starbucks.com/assets/c2a647e72ace4d2da35b1d7b56b05d12.jpg?impolicy=1by1_wide_1242',
		description:"Bulut Macchiato'muz: yumuşak köpük katmanları ile hafif ve havadar, basamaklı espresso, aromalı şekerleme fıstığı şurubu, imza karamel çapraz taramamız ve çiseleyen mocha çiseleyen girdap. Macchiato'nuzu sevmenin yepyeni bir yolunu keşfedin.",
		brand:'C.O.S',
		price:16.99,
		countInStock:15,
		rating:4,
		numReviews:10,
		category:"Macchiato"
	},
	{
		name:"Caffé Latte",
		image:'https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_1242',
		description:"Koyu, zengin espressomuz buharda pişirilmiş süt ve hafif bir köpük tabakası ile dengelenmiştir. Mükemmel bir süt ileri ısınma.",
		brand:'C.O.S',
		price:9.99,
		countInStock:15,
		rating:4.8,
		numReviews:3,
		category:"Latte"
	},
	{
		name:"Caffé Misto",
		image:'https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_1242',
		description:"Taze demlenmiş kahve ve buharda pişirilmiş sütün bire bir kombinasyonu, dikkat çekici şekilde karıştırılmış, belirgin şekilde lezzetli bir kahve içeceği oluşturur.",
		brand:'C.O.S',
		price:12.99,
		countInStock:15,
		rating:2.4,
		numReviews:8,
		category:"Roasted"
	},
	{
		name:"Caffé Mocha",
		image:'https://globalassets.starbucks.com/assets/f4ec500b34624242b15c2d29e53f3c48.jpg?impolicy=1by1_wide_1242',
		description:"Zengin, tam gövdeli espressomuz, acı-tatlı mocha sos ve buharda pişirilmiş süt ile birleştirilir, ardından üzerine tatlandırılmış krem şanti eklenir. Her zaman tatlı bir şekilde tatmin eden klasik kahve içeceği.",
		brand:'C.O.S',
		price:12.99,
		countInStock:8,
		rating:3.1,
		numReviews:7,
		category:"Mocha"
	},
	{
		name:"Capuccino",
		image:'https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242',
		description:"Koyu, zengin espresso, yumuşatılmış ve gerilmiş kalın süt köpüğü tabakasının altında beklemektedir. Barista sanatı ve zanaatının bir simyası.",
		brand:'C.O.S',
		price:8.99,
		countInStock:15,
		rating:4.1,
		numReviews:2,
		category:"Roasted"
	},
	{
		name:"Caramel Cloud Macchiato",
		image:'https://globalassets.starbucks.com/assets/630461ac0c2548cba7e2ab6482bc6477.jpg?impolicy=1by1_wide_1242',
		description:"Cloud Macchiato'muz yumuşak köpük * katmanları, basamaklı espresso, vanilya aromalı şurup ve bir çiseleyen karamel ile hafif ve havadar. Macchiato'nuzu sevmenin yepyeni bir yolu.",
		brand:'C.O.S',
		price:17.99,
		countInStock:15,
		rating:2.5,
		numReviews:8,
		category:"Macchiato"
	},
	{
		name:"Cinnamon Dolce Latte",
		image:'https://globalassets.starbucks.com/assets/9329c03ce24f4623be25dd24d7537db2.jpg?impolicy=1by1_wide_1242',
		description:"Klasik espressomuza taze buharda pişirilmiş süt ve tarçınlı dolce aromalı şurubu ekliyoruz, üstüne tatlandırılmış krem şanti ve tarçınlı dolce ekleyerek size özel bir ikram sunuyoruz.",
		brand:'C.O.S',
		price:15.99,
		countInStock:15,
		rating:4.2,
		numReviews:12,
		category:"Latte"
	},
	{
		name:"Dark Roast",
		image:'https://globalassets.starbucks.com/assets/0279f9c5fa5941d2a65dd183d7a0b386.jpg?impolicy=1by1_wide_1242',
		description:"Cesur, sağlam tatlara sahip bu tam gövdeli koyu kavrulmuş kahve, kavurma ve harmanlama sanatımızı sergiliyor - dengeli ve kalıcı tatların temel bir karışımı.",
		brand:'C.O.S',
		price:5.99,
		countInStock:15,
		rating:4.9,
		numReviews:18,
		category:"Roasted"
	},
	{
		name:"Espresso Macchiato",
		image:'https://globalassets.starbucks.com/assets/26495f2a8b644fe8960dd74e1891b7b7.jpg?impolicy=1by1_wide_1242',
		description:"Zengin espressomuz, buharda pişirilmiş süt ve köpükle işaretlenmiştir. Avrupa tarzı bir klasik.",
		brand:'C.O.S',
		price:7.99,
		countInStock:15,
		rating:1.5,
		numReviews:2,
		category:"Macchiato"
	},
	{
		name:"Espresso Con Panna",
		image:'https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_1242',
		description:"Espresso, sade bir çekimin zengin ve karamelimsi lezzetlerini zenginleştirmek için bir parça çırpılmış krema ile buluşuyor.",
		brand:'C.O.S',
		price:5.99,
		countInStock:15,
		rating:4,
		numReviews:12,
		category:"Espresso"
	},
	{
		name:"Espresso",
		image:'https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_1242',
		description:"Zengin tadı ve karamelimsi tatlılığı ile kusursuz imzamız olan Espresso Roast, yaptığımız her şeyin merkezinde yer almaktadır.",
		brand:'C.O.S',
		price:3,
		countInStock:15,
		rating:5,
		numReviews:12,
		category:"Espresso"
	},
	{
		name:"Flat White",
		image:'https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg?impolicy=1by1_wide_1242',
		description:"Kusursuz ristretto espresso çekimleri, çok güçlü olmayan, çok kremsi olmayan, tam olarak doğru bir lezzet yaratmak için mükemmel miktarda tam yağlı süt elde eder.",
		brand:'C.O.S',
		price:14.99,
		countInStock:15,
		rating:2.8,
		numReviews:12,
		category:"Latte"
	},
	{
		name:"Oatmilk Honey Latte",
		image:'https://globalassets.starbucks.com/assets/edd75880341c437ab194c14835fbb24e.jpg?impolicy=1by1_wide_1242',
		description:"Oatmilk and signature espresso are intentionally combined with a hint of honey and a toasted honey topping—a savory tribute to all things sweet and salty.",
		brand:'C.O.S',
		price:18.99,
		countInStock:15,
		rating:5,
		numReviews:1,
		category:"Latte"
	},
	{
		name:"Pike Place Roast",
		image:'https://globalassets.starbucks.com/assets/bffaf0f27e124801abcabe09f05b0fb2.jpg?impolicy=1by1_wide_1242',
		description:"2008 yılında usta karıştırıcılarımız ve kavurma makinalarımız bunu sizin için yarattı - Latin Amerika kahvelerinin incelikle zengin çikolata ve kavrulmuş fındık tatlarıyla pürüzsüz, çok yönlü bir karışımı, yakınınızdaki bir Starbucks® mağazasında her gün taze olarak servis ediliyor.",
		brand:'C.O.S',
		price:14.99,
		countInStock:15,
		rating:4.2,
		numReviews:8,
		category:"Roasted"
	},
	{
		name:"Pumpkin Spice Latte",
		image:'https://globalassets.starbucks.com/assets/e208cdee37944828bc94e101c6ae1bbe.jpg?impolicy=1by1_wide_1242',
		description:"Espresso ve buharda pişirilmiş süt, balkabağı ve geleneksel sonbahar baharat aromalarının bir karışımı ile birleştirilir. Çırpılmış krema ve Pumpkin Spice sos ile bittiğinde tadını çıkarın.",
		brand:'C.O.S',
		price:14.99,
		countInStock:15,
		rating:4.8,
		numReviews:12,
		category:"Latte"
	},
	{
		name:"Reserve Latte",
		image:'https://globalassets.starbucks.com/assets/55083489399e435e81cf41d899051a5a.jpg?impolicy=1by1_wide_1242',
		description:"Buharda pişirilmiş süt ve hafif bir köpük tabakası ile dengelenmiş küçük lot espresso, mükemmel el yapımı latte oluşturur.",
		brand:'C.O.S',
		price:13.99,
		countInStock:15,
		rating:3.4,
		numReviews:12,
		category:"Latte"
	},
	{
		name:"Salted Caramel Mocha",
		image:'https://globalassets.starbucks.com/assets/da9f3c12cdba4abc913f4d8e294e7629.jpg',
		description:"Mocha sos ve toffeenut şurubu, kahve ve buharda pişirilmiş süt ile birleştirilir, ardından üzerine tatlandırılmış krem şanti, karamel çiseleme ve turbinado şekeri ve deniz tuzu karışımı eklenir. Her yudumda sonbaharın tadını çıkarın.",
		brand:'C.O.S',
		price:12.99,
		countInStock:15,
		rating:0,
		numReviews:0,
		category:"Mocha"
	},
	{
		name:"White Chocolate Mocha",
		image:'https://globalassets.starbucks.com/assets/4b621e63f6ba4c19a8618055284eca8d.jpg?impolicy=1by1_wide_1242',
		description:"İmza espressomuz, beyaz çikolata sosu ve buharda pişirilmiş süt ile buluşuyor ve ardından bu üstün beyaz çikolata zevkini yaratmak için tatlandırılmış çırpılmış krema ile tamamlanıyor.",
		brand:'C.O.S',
		price:18.99,
		countInStock:15,
		rating:4.3,
		numReviews:12,
		category:"Mocha"
	},
	{
		name:"Dark Chocolate Mocha",
		image:'https://globalassets.starbucks.com/assets/ce6342b5aeea4607a0e866057e3b5a4c.jpg?impolicy=1by1_wide_1242',
		description:"Küçük parti espressomuz, kakao, öğütülmüş çikolata ve üzerine buharda pişirilmiş süt ile birlikte mükemmel bir tatlılık kombinasyonu sunar.",
		brand:'C.O.S',
		price:16.99,
		countInStock:15,
		rating:4.8,
		numReviews:3,
		category:"Mocha"
	}
]


module.exports = products;