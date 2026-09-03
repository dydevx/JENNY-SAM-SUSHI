const WA='4915752418921';
const dishImagesLegacy={
  '1':'assets/menu-pdf/p02-12.jpeg','2':'assets/menu-pdf/p02-03.jpeg','3':'assets/menu-pdf/p02-07.jpeg','4':'assets/menu-pdf/p02-11.jpeg','5':'assets/menu-pdf/p02-02.jpeg','6':'assets/menu-pdf/p02-09.jpeg','7':'assets/menu-pdf/p02-01.jpeg','8':'assets/menu-pdf/p02-08.jpeg','10':'assets/menu-pdf/p02-04.jpeg',
  '35':'assets/menu-pdf/p03-03.jpeg','36':'assets/menu-pdf/p03-02.jpeg','37':'assets/menu-pdf/p03-04.jpeg','38':'assets/menu-pdf/p03-01.jpeg','39':'assets/menu-pdf/p03-06.jpeg',
  '40':'assets/menu-pdf/p04-06.jpeg','41':'assets/menu-pdf/p04-05.jpeg','44':'assets/menu-pdf/p04-04.jpeg','45':'assets/menu-pdf/p04-03.jpeg','46':'assets/menu-pdf/p04-02.jpeg','47':'assets/menu-pdf/p04-01.jpeg','61':'assets/menu-pdf/p04-07.jpeg',
  '70':'assets/menu-pdf/p05-16.jpeg','71':'assets/menu-pdf/p05-15.jpeg'
};
// Deactivate the former number-to-photo map: it was based on the incorrect
// numbering and would otherwise show the wrong food beside corrected items.
const dishImages={};
const photoFor=(_category,dish)=>dishImages[dish[0]];
const oldMenu=[
['Vorspeisen',[['1','KHOAI LANG CHIEN','Süßkartoffeln','',3.5],['2','SALMON YAKI','Gegrillter Lachs, Spinat und Spezial-Soße','4',8.4],['3','EDAMAME','Knackige japanische Bohnen','6',3.5],['4','EBI YAKI','Gegrillte Garnelen mit Spargel, Spinat und Spezial-Soße','2',8.4],['5','PRAWN TORNADO','3 Stk. gebackene Garnelen, umwickelt mit Kartoffelspirale','2',5],['6','TUNA YAKI','Angebratener Thunfisch, Spinat und Spezial-Soße','4',8],['7','SPRING ROLL','5 vegetarische Mini-Frühlingsrollen','1a,6',4],['8','YAKITORI','3 Stk. gegrillte Hähnchenspieße','',5],['10','GOI CUON TOM','2 Stk. Sommerrollen mit Garnelen, Salat, Kräutern und Reisnudeln','2,3',5],['11','GOI CUON GA','2 Stk. Sommerrollen mit Hühnerfleisch, Salat, Kräutern und Reisnudeln','3',5],['13','WAN TAN CHIEN','5 Stk. Wantan-Teig mit Huhn und Garnelen','1',5.4],['14','NEM','2 Frühlingsrollen mit Fleisch','3',5]]],
['Suppen',[['35','SAKE SUPPE','Lachssuppe mit Dill, Seetang und Frühlingszwiebeln','5',4.4],['37','MISO SUPPE','Sojabohnenpasta mit Seetang, Frühlingszwiebeln und Tofu','6',3.5],['36','EBI SUPPE','Garnelen, Spargel, Champignons, Zwiebeln und Kräuter','2',4.4],['38','SUA DUA TOM','Kokosmilch, Garnelen, Champignons, Tomaten und Kräuter','2',3.9],['39','SAM SAM SPECIAL','Jakobsmuschel, Garnelen, Spargel, Pak Choi und Kräuter','2,14',4.9]]],
['Maki · 6 Stück',[['40','SAKE AVOCADO','Lachs, Avocado','4',4],['41','TEKKA','Thunfisch','4',4],['42','SAKE KAPPA','Lachs, Gurke','4',4],['43','KAPPA','Gurke','',3.3],['44','AVOCADO','Avocado','',3.3],['45','TAMAGO','Japanisches Omelett','3',3.3],['46','EBI AVOCADO','Garnelen, Avocado','2',4.4],['47','TEKKA SPICY','Scharfer Thunfisch, Lauch','4',4.4],['48','KANI SPECIAL','Krebsfleisch, Mayonnaise','2,3',4.4],['49','TUNA','Gekochter Thunfisch, Lauch, Mayo, Chili','3,4',4.4],['50','TORI KARAAGE','Hähnchenstreifen','',4.4],['51','CALIFORNIA','Surimi, Avocado','Srm',4],['61','FUTO VEGGIE','Verschiedenes Gemüse, Sesam','11',6.5],['65','FUTO BIG ROLL','Lachs, verschiedenes Gemüse','4',7]]],
['Inside Out · 8 Stück',[['70','SAKE I.O.','Lachs, Avocado','4',7.9],['71','MAGURO I.O.','Thunfisch, Gurke','4',7.9],['72','VEGGIE I.O.','Kürbis, Rettich, Avocado, Sesam','14',7.5],['73','EBI I.O.','Garnelen, Avocado','2',7.9],['74','MAGURO SPICY I.O.','Scharfer Thunfisch, Gurke, Lauch','4',7.9],['75','CALIFORNIA I.O.','Krebsfleischimitat, Avocado','Srm',6.9],['76','SALMON SKIN I.O.','Lachshaut, Gurke, Aal','4',7.9],['77','EBI SPICY I.O.','Scharfe Garnelen, Gurke, Lauch','2',7.9],['78','SAKE SPICY I.O.','Scharfer Lachs, Gurke, Lauch','4',7.5],['79','RUCOLA KAPPA I.O.','Rucola, Gurke, Frischkäse, Sesam','7,11',6.9],['80','KANI SPECIAL I.O.','Krebsfleisch, Avocado, Mayonnaise','2,3',7.5],['85','EBI TEMPURA I.O.','Panierte Garnelen, Frischkäse, Gurke','1a,2,3,7',9.5]]],
['Crunchy I-O Rolls · 8 Stück',[['90','SAKE CRUNCHY','Lachs, Avocado, Frischkäse','1a,3,7',8.2],['91','SALMON TEMPURA CRUNCHY','Panierter Lachs, Frischkäse','1a,3,4,7',9.5],['92','TUNA CRUNCHY','Gekochter scharfer Thunfisch, Mayonnaise, Gurke','1a,3,4',7.9],['93','LIAM CRUNCHY','Panierte Hähnchenstreifen, Frischkäse, Gurke','1a,3,7',8.2],['94','SKIN CRUNCHY','Gegrillte Lachshaut, Gurke, Aal','1a,3,4',8.2],['95','EBI CRUNCHY','Scharfe Garnelen, Lauch, Gurke','1a,2,3',7.9],['96','KRABBEN CRUNCHY','Krebsfleisch, Mayonnaise, Avocado','1a,2,3',7.9],['98','MAGURO CRUNCHY','Scharfer Thunfisch, Lauch, Gurke','1a,3,4',8.2]]],
['Nigiri · 2 Stück',[['110','SAKE','Lachs','4',4],['111','MAGURO','Thunfisch','4',5.4],['112','MUTZU','Butterfisch','4a',4],['113','EBI','Garnelen','2',5],['114','IKA','Tintenfisch','14',5],['115','TAMAGO','Omelett','3',4.4],['116','INARI','Tofu','6',3.5],['117','AVOCADO','Avocado','',3.5]]],
['Sushi-Menüs',[['M1','MENÜ 1','2 Sake Nigiri, 8 Sake Rolls','',13.5],['M2','MENÜ 2','8 Avocado I.O., 8 Sake Crunchy I.O., 8 California I.O.','',19.9],['M3','MENÜ 3','6 Mango Maki, 6 Kappa Maki, 8 Avocado Rolls','',12.5],['M4','MENÜ 4','8 Sake I.O., 4 Taiko Rolls, 3 Nigiri: Sake, Maguro, Ebi','',19],['M5','MENÜ 5','6 Sake Maki, 4 Kyoto Rolls, 4 Tazuna Rolls, 2 Nigiri: Sake, Ebi','',21],['M6','MENÜ 6','8 Sake Rolls, 8 Ebi Rolls, 8 Jenny Rolls','',20.9],['M7','MENÜ 7','6 New York Rolls, 6 Atlantic Rolls, 6 Fuji Rolls','',25],['M8','MENÜ 8','6 Sake Avocado Maki, 6 California Maki, 8 Sake Crunchy I.O., 8 Kani Special I.O., 8 Avocado Rolls, 6 New York Rolls, 4 Nigiri','',45],['M9','MENÜ 9','6 Avocado Maki, 8 Kappa Rolls, 2 Nigiri: Tamago, Inari','',12],['M10','MENÜ 10','8 Tuna Crunchy I.O., 4 Fuji Yama Rolls, 4 Black Tiger Rolls, 2 Sake Nigiri Aburi','',25],['M11','MENÜ 11','2 Sake Nigiri Aburi, 2 Maguro Nigiri Aburi, 2 Ebi Nigiri, 2 Avocado Nigiri','',15],['M12','MENÜ 12','Großes Menü mit Maki, Inside Out, Rolls und 8 Nigiri','',68]]],
['Teriyaki',[['300','SALMON TERIYAKI','Gegrillter Lachs mit verschiedenem Gemüse','4',16.9],['301','TUNA TERIYAKI','Angebratener Thunfisch mit verschiedenem Gemüse','4',17.9],['302','BEEF TERIYAKI','Mariniertes Rindfleisch mit verschiedenem Gemüse','',14.9],['303','SQUID TERIYAKI','Gegrillter Tintenfisch mit verschiedenem Gemüse','14',17.9],['304','HOTATEGAI TERIYAKI','Gegrillte Jakobsmuscheln mit verschiedenem Gemüse','14',17.9],['306','CHICKEN TERIYAKI','Gegrilltes Hühnerfleisch mit verschiedenem Gemüse','',13.9],['307','TORI TERIYAKI','Gebackenes Hähnchenbrustfilet','',12.9],['308','DUCK TERIYAKI','Gegrillte Ente mit verschiedenem Gemüse','',15.9]]],
['Poke Bowls',[['490','BUDDHA POKE BOWL','Mit Tofu','6',11.9],['491','YAKITORI POKE BOWL','Mit süßem Huhn am Spieß','',12.9],['492','BEEF POKE BOWL','Mit mariniertem Rindfleisch','',13.5],['493','CRISPY CHICKEN POKE BOWL','Mit paniertem Hähnchen','1',13.5],['494','GRILL CHICKEN POKE BOWL','Mit gegrilltem Hähnchenbrustfilet','',13.5],['495','SAKE POKE BOWL','Mit rohem Lachs','4',13.9],['496','TUNA POKE BOWL','Mit rohem Thunfisch','4',15.9]]],
['Desserts',[['620','DRAGON BALL','4 Stk. gefüllt mit süßen Bohnen','',4],['621','MOCHI','Reiskuchen mit roten Bohnen','',4],['622','LUCKY EGG','4 Stk. gefüllt mit Vanille','',4],['623','BANANIFLIRT','Gebackene Banane mit Spezialsoße','',4],['624','APFEL FLIRT','Mit Spezialsoße','',4],['625','ANANAS FLIRT','Mit Spezialsoße','',4]]],
['Getränke',[['700','COLA','0,3 l','K,F,S',3.4],['701','COLA LIGHT','0,3 l','K,F,S,Su',3.4],['702','FANTA','0,3 l','F,S',3.4],['703','SPEZI','0,3 l','A,F,S',3.4],['704','SPRITE','0,3 l','',3.4],['710','MANGO SAFT/SCHORLE','0,3 l','',3.8],['720','GRÜN-TEE','0,3 l','',4],['730','MANGO-LASSI','0,4 l','7',5.9],['740','SAPPORO','0,33 l','1',3.8],['741','ASAHI','0,33 l','1',3.8],['760','PINOT GRIGIO','0,2 l / Flasche 0,75 l','12',5.5],['770','APEROL SPRITZ','Prosecco, Aperol, Soda, Orange','12',7.2]]]
];

// Vollständig neu erfasst nach der PDF-Speisekarte vom 25.06.2024.
const rows=(text,desc='')=>text.trim().split('\n').map(line=>{const [nr,name,allergy,price,itemDesc]=line.split('|');return[nr,name,itemDesc||desc,allergy,Number(price)]});
const variants=(category,start,names,desc)=>[category,names.map((x,i)=>[String(start+i),x[0],desc,x[1],x[2]])];
const menu=[
['Vorspeisen',rows(`
1|SPRING ROLL|1a,6|3.5|5 vegetarische Mini-Frühlingsrollen
2|EDAMAME|6|3.5|Knackige japanische Bohnen
3|SALMON YAKI|4|8.0|Gegrillter Lachs, Spinat und Spezial-Soße
4|TUNA YAKI|4|8.4|Angebratener Thunfisch, Spinat und Spezial-Soße
5|SQUID YAKI|14|8.0|Gegrillter Tintenfisch, Spinat und Spezial-Soße
6|EBI YAKI|2|8.4|Gegrillte Garnelen mit Spargel, Spinat und Spezial-Soße
7|PRAWN TORNADO|2|5.0|3 gebackene Garnelen mit Kartoffelspirale
8|YAKITORI||5.0|3 gegrillte Hähnchenspieße
10|GOI CUON TOM|2,3|4.0|2 Sommerrollen mit Garnelen
11|GOI CUON GA|3|4.0|2 Sommerrollen mit Hühnerfleisch
12|GOI CUON DAU|3,6|4.0|2 Sommerrollen mit Tofu
13|WAN TAN CHIEN|1|5.4|5 Wantan mit Huhn und Garnelen
14|NEM|3|5.0|2 Frühlingsrollen mit Fleisch
15|KHOAI LANG CHIEN||6.4|Süßkartoffeln
16|GYOZA|1a|5.0|4 Teigtaschen mit Fleisch
17|VEGGIE GYOZA|1a|5.0|4 Teigtaschen mit Spinat
18|TORI NO KARAAGE||5.7|5 panierte Hähnchen-Nuggets
19|HA CAO TOM|1a,2|5.4|4 Teigtaschen mit Garnelen
20|ALGEN SALAT|5,11|5.0|Seetang-Salat, Sesam`)],
['Salate',rows(`22|SALMON SAM|4,5,11|9.0|Jenny-Sam-Salat mit gegrilltem Lachs
23|TUNA JENNY|4,5,11|9.0|Jenny-Sam-Salat mit gegrilltem Thunfisch
26|XOAI TOM - GARNELEN||7.9|Mango-Salat mit Garnelen
27|XOAI BO - RINDFLEISCH||7.9|Mango-Salat mit Rindfleisch
28|XOAI GA - HÜHNERFLEISCH||7.5|Mango-Salat mit Hühnerfleisch
29|XOAI DAU PHU - TOFU|6|7.0|Mango-Salat mit Tofu
30|GARNELEN||7.9|Jenny-Sam-Salat mit Garnelen
31|RINDFLEISCH||7.9|Jenny-Sam-Salat mit Rindfleisch
32|HÜHNERFLEISCH||7.5|Jenny-Sam-Salat mit Hühnerfleisch
33|TOFU|6|7.0|Jenny-Sam-Salat mit Tofu`)],
['Suppen',rows(`34|MISO SUPPE|6|3.5|Sojabohnenpasta, Seetang, Frühlingszwiebeln, Tofu
35|SAKE SUPPE|5|3.9|Lachssuppe mit Dill und Seetang
36|SUA DUA TOM|2|4.4|Kokosmilch-Suppe mit Garnelen
37|SUA DUA GA||4.4|Kokosmilch-Suppe mit Hühnerfleisch
38|EBI SUPPE|2|4.4|Garnelen, Spargel, Champignons und Kräuter
39|SAM SAM SPECIAL|2,14|4.9|Jakobsmuschel, Garnelen, Spargel und Pak Choi`)],
['Maki · 6 Stück',rows(`40|SAKE AVOCADO|4|4.0|Lachs, Avocado
41|TEKKA|4|4.4|
42|THUNFISCH||4.0|Thunfisch
43|SAKE KAPPA|4|4.0|Lachs, Gurke
44|MUTZU|4a|4.4|Butterfisch
45|EBI|2|4.0|Garnelen
46|EBI AVOCADO|2|4.4|Garnelen, Avocado
47|TEKKA SPICY|4|4.4|Scharfer Thunfisch, Lauch
48|CALIFORNIA|Srm|4.0|Surimi, Avocado
49|KANI SPECIAL|2,3|4.4|Krebsfleisch, Mayonnaise
50|SALMON SKIN|4|4.4|Gegrillte Lachshaut
51|TUNA|3,4|4.0|Gekochter Thunfisch, Lauch, Mayo, Chili
52|KAPPA||3.3|Gurke
53|AVOCADO||3.3|Avocado
54|TAMAGO|3|3.3|Japanisches Omelett
55|UNAGI|4|5.0|Flussaal
56|INARI|6|3.5|Marinierter Tofu
57|SHIITAKE||3.5|Japanischer Pilz
58|OSHINKO||3.3|Rettich
59|KÜRBIS||3.5|Kürbis
60|PAPRIKA||3.3|Paprika, Sesam
61|FUTO BIG ROLL|4|7.0|Lachs, verschiedenes Gemüse
62|FUTO VEGGIE|11|6.5|Verschiedenes Gemüse, Sesam
63|ASUPARA|7,11|4.0|Mango, Sesam
64|SAM|3,4|4.0|Gedämpfter Lachs, Mayo, Lauch, Chili
65|TORI KARAAGE||4.0|Hähnchenstreifen`)],
['Inside Out · 8 Stück',rows(`70|SAKE I.O.|4|7.5|Lachs, Avocado
71|MAGURO I.O.|4|7.9|Thunfisch, Gurke
72|EBI I.O.|2|7.9|Garnelen, Avocado
73|KANI SPECIAL I.O.|2,3|7.9|Krebsfleisch, Avocado, Mayonnaise
74|VEGGIE I.O.|14|6.9|Kürbis, Rettich, Avocado, Sesam
75|RUCOLA KAPPA I.O.|7,11|6.9|Rucola, Gurke, Frischkäse, Sesam
76|CALIFORNIA I.O.|Srm|7.5|Surimi, Avocado
77|EBI SPICY I.O.|2|7.9|Scharfe Garnelen, Gurke, Lauch
78|SAKE SPICY I.O.|4|7.5|Scharfer Lachs, Gurke, Lauch
79|MAGURO SPICY I.O.|4|7.9|Scharfer Thunfisch, Gurke, Lauch
80|SALMON SKIN I.O.|4|7.9|Lachshaut, Gurke, Aal
81|ASUPARA I.O.|7,11|8.5|Spargel, Avocado, Frischkäse, Sesam
82|EBI TEMPURA I.O.|1a,2,3,7|9.5|Panierte Garnelen, Frischkäse, Gurke
83|TAMAGO I.O.|3,11|7.2|Omelett, Avocado, Sesam
84|JENNY I.O.|3,4,11|7.5|Gedämpfter Lachs, Mayo, Chili, Gurke, Sesam
85|TUNA I.O.|3,4,11|7.5|Gekochter Thunfisch, Mayo, Lauch, Sesam
86|MINA I.O.|7,11|7.9|Hühnerfleisch, Gurke, Sesam, Frischkäse
87|TONY I.O.|4,7,11|7.9|Lachs, Frischkäse, Rucola, Sesam`)],
['Crunchy I-O Rolls · 8 Stück',rows(`90|SAKE CRUNCHY|1a,3,7|7.9|Lachs, Avocado, Frischkäse
91|MAGURO CRUNCHY|1a,3,4|8.2|Scharfer Thunfisch, Lauch, Gurke
92|EBI CRUNCHY|1a,2,3|8.2|Scharfe Garnelen, Lauch, Gurke
93|SKIN CRUNCHY|1a,3,4|8.2|Lachshaut, Gurke, Aal
94|KRABBEN CRUNCHY|1a,2,3|8.2|Krebsfleisch, Mayo, Avocado
95|TUNA CRUNCHY|1a,3,4|7.9|Gekochter Thunfisch, Mayo, Gurke
96|SALMON TEMPURA CRUNCHY|1a,3,4,7|8.2|Panierter Lachs, Frischkäse
98|SAM CRUNCHY|3,4|7.9|Gedämpfter Lachs, Mayo, Chili, Gurke
99|LIAM CRUNCHY|1a,3,7|9.5|Panierte Hähnchenstreifen, Frischkäse, Gurke`)],
['Temaki · 1 Stück',rows(`100|MAGURO TEMAKI|4|4.9|Thunfisch, Gurke, Avocado
101|SAKE TEMAKI|4|4.2|Lachs, Avocado, Gurke
102|CALIFORNIA TEMAKI|Srm|4.0|Surimi, Avocado, Gurke
103|SALMON SKIN TEMAKI|4|4.9|Lachshaut, Gurke, Aal
104|TAMAGO TEMAKI|3|4.0|Omelett, Avocado, Gurke
105|INARI AVOCADO TEMAKI|6|4.0|Tofu, Gurke, Avocado
106|CRABS TEMAKI|2|4.9|Krebsfleisch, Avocado, Gurke`)],
['Sashimi',rows(`110 (6 Stk.)|SAKE|4|11.9|Lachs
110 (12 Stk.)|SAKE|4|19.9|Lachs
111 (6 Stk.)|MAGURO|4|13.9|Thunfisch
111 (12 Stk.)|MAGURO|4|24.9|Thunfisch
112 (6 Stk.)|SAKE & MAGURO|4|12.9|Lachs und Thunfisch
112 (12 Stk.)|SAKE & MAGURO|4|22.0|Lachs und Thunfisch
113 (6 Stk.)|MUTZU|4a|12.9|Butterfisch
113 (12 Stk.)|MUTZU|4a|20.0|Butterfisch
114|MIX|4|29.9|Verschiedene Fischsorten
115 Klein|SAKE SPECIAL|4|12.7|Angebratener Lachs
115 Groß|SAKE SPECIAL|4|20.7|Angebratener Lachs
116 Klein|MAGURO SPECIAL|4|14.7|Angebratener Thunfisch
116 Groß|MAGURO SPECIAL|4|25.7|Angebratener Thunfisch
117 Klein|BUTTERFISH SPECIAL|4a|13.7|Angebratener Butterfisch
117 Groß|BUTTERFISH SPECIAL|4a|20.9|Angebratener Butterfisch`)],
['Nigiri · 2 Stück',rows(`200|SAKE|4|4.0|Lachs
201|MAGURO|4|4.4|Thunfisch
202|MUTZU|4a|4.0|Butterfisch
203|HOTATEGAI|14|5.4|Jakobsmuschel
204|IKURA|4|5.0|Lachskaviar
205|UNAGI|4|5.0|Süßwasseraal
207|TAMAGO|3|3.5|Omelett
208|INARI|6|3.5|Tofu
209|SHIITAKE||3.5|Japanischer Pilz
210|KANI|Srm|3.5|Surimi
211|KANI SPECIAL|Srm,3|4.4|Krebsfleisch, Mayo, Lauch
212|EBI|2|5.0|Garnelen
214|MINI SPARGEL||4.4|Mini-Spargel
215|IKA|14|4.0|Tintenfisch
216|AVOCADO||3.5|Avocado`)],
['Fire of Jenny Sam · 2 Stück',rows(`220|MAGURO ABURI|2|4.4|Thunfisch
221|SAKE ABURI|2|4.4|Lachs
222|BEST FRIEND ABURI|4|4.7|Lachs, Thunfisch, Spargel
223|HOTATE ABURI|14|5.0|Jakobsmuschel
224|MUTSU ABURI|4a|4.4|Butterfisch
225|SQUID ABURI|14|4.4|Tintenfisch
226|SOMI ABURI|2|5.4|Lachs, Aal
227|SAKE ASPARAGUS|2|4.4|Flambierter Lachs, Spargel
228|MAGURO ASPARAGUS|2|4.4|Flambierter Thunfisch, Spargel
229|SALMON ROSE|3,4|4.4|Gehackter Lachs, Mayo, Lauch
230|LACHS-TATAR|2,3,4|4.4|Gurkenhülle mit gehacktem Lachs
231|MAGURO-TATAR|4|4.4|Gurkenhülle mit scharfem Thunfisch
232|CRAB-TATAR|2,3|4.4|Gurkenhülle mit Krebsfleisch`)],
['Special Rolls · 4/8 Stück',rows(`400|RAINBOW ROLLS|2,4,4a|7.5|4 Stück · 8 Stück: 13,00 €
401|BLACK TIGER ROLLS|1a,2,3,4,7|7.9|4 Stück · 8 Stück: 14,00 €
402|FUJI YAMA||7.5|4 Stück · 8 Stück: 13,50 €
403|TIGER ROLLS||7.3|4 Stück · 8 Stück: 12,50 €
405|SAKURA ROLLS|4,7|7.5|4 Stück · 8 Stück: 12,50 €
406|TAZUNA ROLLS|4,7|7.2|4 Stück · 8 Stück: 12,50 €
407|TAMAGO ROLLS|3,4,7|7.2|4 Stück · 8 Stück: 12,50 €
408|TAIKO ROLLS|2,4,7|7.5|4 Stück · 8 Stück: 13,50 €
409|TUNA ROLLS|3,4,7|7.2|4 Stück · 8 Stück: 11,50 €
410|FUJI ROLLS|1a,2,3,4,7|7.5|4 Stück · 8 Stück: 13,00 €
411|JENY FRIENDS SALMON||7.9|4 Stück · 8 Stück: 14,00 €
412|OSAKA ROLL|3,4|6.9|4 Stück · 8 Stück: 11,50 €
413|PHILADELPHIA ROLLS|4,7|7.9|4 Stück · 8 Stück: 14,00 €
414|JENNY SAM FRIENDS SALMON|1a,3,4,7|6.9|4 Stück · 8 Stück: 11,50 €
417|KYOTO ROLLS|4,7|7.5|4 Stück · 8 Stück: 13,50 €
418|HOTTZUNA ROLLS|4|7.9|4 Stück · 8 Stück: 14,00 €
419|ORCHID ROLLS|7|6.9|4 Stück · 8 Stück: 11,50 €
420|CRISPY TUNA RICE|1a,3,4|5.5|4 Stück
421|CRISPY SALMON RICE|1a,3,4|5.5|4 Stück
422|CRISPY CRAB RICE|1a,2,3|5.5|4 Stück
423|FIRE TUNA|1a,3,4,7|7.5|4 Stück · 8 Stück: 13,00 €
424|FIRE SALMON|1a,3|6.9|4 Stück · 8 Stück: 11,90 €
425|FIRE OCEAN ROLLS|1a,2,3,4,7|14.0|8 Stück`)],
['Panierte Mini Rolls · 6 Stück',rows(`430|NEW YORK ROLLS|1a,3,4,7|9.2|Lachs, Gurke, Avocado, Frischkäse
431|AIKO ROLLS|1a,3,4|9.2|Gekochter Thunfisch, Mayo, Chili, Gurke
432|TOKYO ROLLS|1a,3,Srm,4,7|9.2|Lachshaut, Aal, Surimi, Gurke, Frischkäse
433|FUJI SAN ROLLS|1a,2,3,7|9.5|Garnelen, Gurke, Avocado, Frischkäse
434|PANDA ROLLS|1a,3|8.9|Omelett, Gurke, Kürbis, Shiitake
435|AKITA ROLLS|1a,3,7|9.2|Hähnchen, Gurke, Avocado, Frischkäse
436|MILA|1a,3,4|9.2|Gedämpfter Lachs, Mayo, Chili, Gurke, Avocado`)],
['Panierte Big Rolls · 8 Stück',rows(`450|SAKE ROLLS|1a,3,4,11|7.5|Lachs
451|EBI ROLLS|1a,2,3,7,11|7.9|Garnelen, Lauch, Frischkäse
452|SPICY ROLLS|1a,3,4,11|7.9|Thunfisch, Chili, Lauch
453|KANI ROLLS|1a,2,3,11|7.9|Krebsfleisch, Avocado
454|VEGGIE ROLLS|1a,3,11|7.5|Shiitake, Kürbis
455|AVOCADO ROLLS|1a,3,7,11|7.5|Avocado, Frischkäse
456|SAM ROLLS|1a,3,4,11|7.5|Gedämpfter Lachs, Mayo, Chili
457|JENNY ROLLS|1a,3,7,11|7.5|Hähnchenstreifen, Frischkäse`)],
...oldMenu.filter(([c])=>['Sushi-Menüs'].includes(c)),
['Teriyaki',rows(`300|SALMON TERIYAKI|4|16.9|Gegrillter Lachs mit Gemüse
301|TUNA TERIYAKI|4|17.9|Thunfisch mit Gemüse
302|BEEF TERIYAKI||14.9|Rindfleisch mit Gemüse
303|HOTATEGAI TERIYAKI|14|17.9|Jakobsmuscheln mit Gemüse
304|SQUID TERIYAKI|14|15.9|Tintenfisch mit Gemüse
306|CHICKEN TERIYAKI||13.9|Gegrilltes Hühnerfleisch
307|DUCK TERIYAKI||15.9|Gegrillte Ente
308|STIR FRY CHICKEN TERIYAKI||12.9|Gebratenes Hühnerfleisch
309|SHRIMP TERIYAKI|2|14.9|Garnelen
310|TORI TERIYAKI||13.9|Gebackenes Hähnchenbrustfilet`)],
...['Roter Curry|460','Massaman-Curry|470','Mango-Curry|480','Pfeffer-Koriander|510','Sate|520','Süß-Sauer|530','Erdnuss|540','Chili-Knoblauch|550','Zitronengras-Chili|560'].map(x=>{const[c,s]=x.split('|');return variants(c,+s,[['ENTE KROSS','1',15.9],['HÄHNCHENBRUSTFILET','',12.9],['TOFU','6',11.9],['RINDFLEISCH','',14.9],['PANIERTES HÄHNCHENBRUSTFILET','1',13.9],['GARNELEN','2',14.9],['GEGRILLTES HÄHNCHENBRUSTFILET','1',13.9],['GEGRILLTER LACHS','4',16.9]],`${c}-Soße mit verschiedenem Gemüse`)}),
variants('Com Chien Ha Noi',500,[['ENTE KROSS','1',15.9],['HÄHNCHENBRUSTFILET','',12.9],['PANIERTES HÄHNCHENBRUSTFILET','1',13.9],['GARNELEN','2',14.9],['MEERESFRÜCHTE','',14.9]],'Gebratener Reis mit Gemüse und Kräutern'),
['Bun Nam Bo',rows(`570|FRÜHLINGSROLLEN|3|13.9|Reisnudeln, Salat, Erdnuss und Kräuter
571|MARINIERTES RINDFLEISCH|5|14.9|Reisnudeln, Salat, Erdnuss und Kräuter
572|HÄHNCHENBRUSTFILET|5|13.9|Reisnudeln, Salat, Erdnuss und Kräuter
573|GEBACKENER TOFU|5,6|12.9|Reisnudeln, Salat, Erdnuss und Kräuter
574|BÚN THỊT NƯỚNG|5|14.9|Reisnudeln, Salat, Erdnuss und Kräuter`)],
...['Pho Hanoi|580|Traditionelle Reisbandnudelsuppe','Udon-Suppe|590|Udon-Nudelsuppe','Pho Xao|600|Gebratene Reisbandnudeln','Udon Xao|610|Gebratene Udon-Nudeln'].map(x=>{const[c,s,d]=x.split('|');return variants(c,+s,[['ENTE KROSS','1',15.9],['HÄHNCHENBRUSTFILET','',13.9],['TOFU','6',11.9],['RINDFLEISCH','',14.9],['GARNELEN','2',14.9],['GEGRILLTES HÄHNCHENBRUSTFILET','1',13.9]],d)}),
...oldMenu.filter(([c])=>['Poke Bowls','Desserts'].includes(c)),
['Getränke',rows(`700|COLA|K,F,S|3.4|0,3 l
701|COLA LIGHT|K,F,S,Su|3.4|0,3 l
702|FANTA|A,F,S|3.4|0,3 l
703|SPEZI|F,S,St|3.4|0,3 l
704|SPRITE|S,Sr|3.4|0,3 l
705|GINGER ALE|F,S|3.4|0,3 l
706|WASSER STILL/SPRUDEL||3.2|0,3 l
710|MANGO SAFT/SCHORLE||3.8|0,3 l
711|LYCHEE SAFT/SCHORLE||3.8|0,3 l
712|APFEL SAFT/SCHORLE||3.8|0,3 l
713|MARACUJA SAFT/SCHORLE||3.8|0,3 l
720|GRÜN-TEE||4.0|0,3 l
721|JASMIN-TEE||4.0|0,3 l
722|INGWER-TEE||4.8|Ingwer, Limetten, Honig
723|MINZE-TEE||4.8|Minze, Limetten, Honig
724|ZITRONENGRAS-TEE||4.8|Zitronengras, Limetten, Honig
730|MANGO-LASSI|7|5.9|0,4 l
731|STRAWBERRY KISS|7|5.9|0,4 l
732|PASSION LIMES|7|5.9|0,4 l
733|MANGO LIMES|7|5.9|0,4 l
734|LYCHEE HEAVEN||5.9|0,4 l
735|CHANH DA||5.9|0,4 l
736|GINGER COOLER||5.9|0,4 l
740|APEROL SPRITZ|12|7.2|Prosecco, Aperol, Soda, Orange
741|LYCHEE SPRITZ|12|7.5|Prosecco, Lychee-Likör, Limetten, Soda
742|HUGO|12|7.2|Prosecco, Holunderblütensirup, Limetten, Minze
750|SAPPORO|1|3.8|0,33 l
751|FLASCHENBIER||3.8|0,33 l
752|ASAHI|1|3.8|0,33 l
753|WARSTEINER PILSNER|1|3.9|0,33 l
754|RADLER|1|4.2|0,5 l
755|ERDINGER HEFEWEIZEN|1|4.2|0,5 l
756|ERDINGER KRISTALLWEIZEN|1|4.2|0,5 l
757|ERDINGER ALKOHOLFREIES WEIZENBIER||4.2|0,5 l
760|PINOT GRIGIO|12|5.5|0,2 l / Flasche 0,75 l: 17,90 €
761|CHARDONNAY|12|5.5|0,2 l / Flasche 0,75 l: 17,90 €
762|ROSÉ|12|5.5|0,2 l / Flasche 0,75 l: 17,90 €
763|MERLOT|12|5.5|0,2 l / Flasche 0,75 l: 17,90 €
770|SAKE|12|5.5|Heiß/kalt`)]
];
const money=n=>n.toLocaleString('de-DE',{style:'currency',currency:'EUR'}); let cart={};
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function renderMenu(){const cats=document.querySelector('#categories'),select=document.querySelector('#category-select'),list=document.querySelector('#menu-list');cats.innerHTML=menu.map((c,i)=>`<button class="${i===0?'active':''}" data-target="${slug(c[0])}">${c[0]}</button>`).join('');select.innerHTML=menu.map(c=>`<option value="${slug(c[0])}">${c[0]}</option>`).join('');list.innerHTML=menu.map(([cat,items])=>`<section class="menu-category" id="${slug(cat)}" data-category="${slug(cat)}"><h3>${cat}</h3><div class="dish-grid">${items.map((d,i)=>{const photo=photoFor(cat,d,i);return `<article class="dish ${photo?'has-photo':''}" data-search="${`${d[0]} ${d[1]} ${d[2]}`.toLowerCase()}">${photo?`<img class="dish-photo" src="${photo}" alt="Gericht ${d[1]}" loading="lazy" decoding="async">`:''}<div><span class="nr">Nr. ${d[0]}</span><h4>${d[1]}</h4></div><strong class="price">${money(d[4])}</strong><p>${d[2]}</p><span class="allergy">${d[3]?`Allergene: ${d[3]}`:'Allergene: –'}</span><button data-add="${d[0]}">Bestellen</button></article>`}).join('')}</div></section>`).join('');}
function findDish(id){for(const [,items] of menu){const d=items.find(x=>x[0]===id);if(d)return d}}
function updateCart(){const box=document.querySelector('#cart-items'),entries=Object.entries(cart);box.innerHTML=entries.length?entries.map(([id,q])=>{const d=findDish(id);return `<div class="cart-line"><span>${q}× Nr. ${d[0]} ${d[1]}</span><b>${money(d[4]*q)}</b><div class="qty"><button data-qty="${id}" data-delta="-1">−</button><span>${q}</span><button data-qty="${id}" data-delta="1">+</button></div></div>`}).join(''):'<p class="empty">Noch nichts ausgewählt.</p>';const total=entries.reduce((s,[id,q])=>s+findDish(id)[4]*q,0);document.querySelector('#cart-total').textContent=money(total);document.querySelector('#cart-count').textContent=entries.reduce((s,[,q])=>s+q,0)}
renderMenu();
document.addEventListener('click',e=>{const add=e.target.closest('[data-add]');if(add){cart[add.dataset.add]=(cart[add.dataset.add]||0)+1;updateCart()}const qty=e.target.closest('[data-qty]');if(qty){cart[qty.dataset.qty]=(cart[qty.dataset.qty]||0)+Number(qty.dataset.delta);if(cart[qty.dataset.qty]<=0)delete cart[qty.dataset.qty];updateCart()}const target=e.target.closest('[data-target]');if(target){document.querySelectorAll('.category-nav button').forEach(x=>x.classList.remove('active'));target.classList.add('active');document.getElementById(target.dataset.target).scrollIntoView()}if(e.target.closest('.menu-toggle')){const n=document.querySelector('#nav');n.classList.toggle('open');e.target.closest('.menu-toggle').setAttribute('aria-expanded',n.classList.contains('open'))}if(e.target.closest('#cart-fab'))document.querySelector('#cart').classList.add('open');if(e.target.closest('.cart-close'))document.querySelector('#cart').classList.remove('open');if(e.target.closest('.gallery-item'))document.querySelector('#lightbox').showModal();if(e.target.closest('#lightbox button'))document.querySelector('#lightbox').close();const legal=e.target.closest('[data-modal]');if(legal){document.querySelector('#legal-content').innerHTML=legal.dataset.modal==='impressum'?'<h2>Impressum</h2><p><b>Jenny Sam Sushi</b><br>Pferdestraße 33<br>14913 Jüterbog<br>Telefon: 03372 4423033<br>E-Mail: anhdungle2982@gmail.com</p><p>Inhaltlich verantwortlich: Betreiber von Jenny Sam Sushi.</p>':'<h2>Datenschutz</h2><p>Diese statische Website setzt keine Analyse-Cookies. Bei Nutzung von WhatsApp, Google Maps, Telefon oder E-Mail gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Formulardaten werden ausschließlich lokal im Browser verarbeitet und als von Ihnen ausgelöste WhatsApp-Nachricht vorbereitet.</p>';document.querySelector('#legal').showModal()}if(e.target.closest('.dialog-close'))document.querySelector('#legal').close()});
document.querySelector('#send-order').addEventListener('click',()=>{const entries=Object.entries(cart);if(!entries.length){alert('Bitte wählen Sie zuerst ein Gericht.');return}const total=entries.reduce((s,[id,q])=>s+findDish(id)[4]*q,0),lines=entries.map(([id,q],i)=>{const d=findDish(id);return `${i+1}. ${q}x Nr. ${d[0]} ${d[1]} – ${money(d[4]*q)}`});const note=document.querySelector('#note').value.trim();const text=`Hallo Jenny Sam, ich möchte bestellen:\n\n${lines.join('\n')}\n\nGesamt: ${money(total)}${note?`\n\nAnmerkung: ${note}`:''}`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`,'_blank','noopener')});
document.querySelector('#reservation-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),text=`Hallo Jenny Sam, ich möchte gerne einen Tisch reservieren.\n\nName: ${f.get('name')}\nTelefonnummer: ${f.get('phone')}\nDatum: ${f.get('date')}\nUhrzeit: ${f.get('time')}\nPersonen: ${f.get('people')}\nNachricht: ${f.get('message')||'-'}`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`,'_blank','noopener')});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('#nav').classList.remove('open')));

// Motion system: one staged entrance, purposeful scroll guidance and tactile feedback.
const root=document.documentElement,header=document.querySelector('.site-header'),hero=document.querySelector('.hero');
const updateScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;root.style.setProperty('--scroll',max>0?scrollY/max:0);header.classList.toggle('scrolled',scrollY>32)};
addEventListener('scroll',updateScroll,{passive:true});updateScroll();
if(matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches){hero.addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*8,y=(e.clientY/innerHeight-.5)*6;hero.style.setProperty('--hero-x',`${x}px`);hero.style.setProperty('--hero-y',`${y}px`)})}
const revealTargets=document.querySelectorAll('.intro,.section-head,.menu-title,.reservation>div,.reservation form,.contact-info,.contact iframe,.footer-grid');
revealTargets.forEach(el=>el.classList.add('motion-reveal'));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.14,rootMargin:'0px 0px -7%'});
revealTargets.forEach(el=>revealObserver.observe(el));
const categoryObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view')}),{threshold:.08});
document.querySelectorAll('.menu-category').forEach(el=>categoryObserver.observe(el));
document.addEventListener('click',e=>{const add=e.target.closest('[data-add]');if(add){const fab=document.querySelector('#cart-fab'),dish=add.closest('.dish');fab.classList.remove('bump');dish?.classList.remove('just-added');requestAnimationFrame(()=>{fab.classList.add('bump');dish?.classList.add('just-added')});const old=add.textContent;add.textContent='Hinzugefügt ✓';add.classList.add('is-confirmed');setTimeout(()=>{add.textContent=old;add.classList.remove('is-confirmed');dish?.classList.remove('just-added')},900)}});
const searchInput=document.querySelector('#menu-search'),categorySelect=document.querySelector('#category-select'),menuResult=document.querySelector('#menu-result');
function filterMenu(){const query=searchInput.value.trim().toLowerCase(),category=categorySelect.value;let visible=0;document.querySelectorAll('.menu-category').forEach(section=>{const active=section.dataset.category===category;section.querySelectorAll('.dish').forEach(dish=>{const show=active&&(!query||dish.dataset.search.includes(query));dish.hidden=!show;if(show)visible++});section.hidden=!active});menuResult.textContent=visible===1?'1 Ergebnis':`${visible} Ergebnisse`;}
searchInput.addEventListener('input',filterMenu);categorySelect.addEventListener('change',()=>{searchInput.value='';document.querySelectorAll('.category-nav button').forEach(button=>button.classList.toggle('active',button.dataset.target===categorySelect.value));filterMenu()});
document.querySelector('#categories').addEventListener('click',e=>{const button=e.target.closest('[data-target]');if(!button)return;categorySelect.value=button.dataset.target;searchInput.value='';filterMenu()});
categorySelect.value=slug(menu[0][0]);filterMenu();

// A restrained depth layer for food photography on precise pointers.
if(matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches){
  document.querySelectorAll('.special').forEach(card=>{
    card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.setProperty('--tilt-x',`${(-y*2.2).toFixed(2)}deg`);card.style.setProperty('--tilt-y',`${(x*2.2).toFixed(2)}deg`);card.style.setProperty('--light-x',`${((x+.5)*100).toFixed(0)}%`);card.style.setProperty('--light-y',`${((y+.5)*100).toFixed(0)}%`)});
    card.addEventListener('pointerleave',()=>{card.style.removeProperty('--tilt-x');card.style.removeProperty('--tilt-y')});
  });
}

// Keep orientation visible while browsing long pages.
const pageSections=[...document.querySelectorAll('main section[id]')],navLinks=[...document.querySelectorAll('#nav a[href^="#"]')];
const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;navLinks.forEach(link=>link.classList.toggle('is-current',link.getAttribute('href')===`#${entry.target.id}`))}),{rootMargin:'-28% 0px -62%',threshold:0});
pageSections.forEach(section=>navObserver.observe(section));

// Gallery items arrive as one composed sequence, not repeated section fades.
const gallery=document.querySelector('.gallery-grid');
if(gallery){const galleryObserver=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){gallery.classList.add('is-visible');galleryObserver.disconnect()}},{threshold:.18});galleryObserver.observe(gallery)}
