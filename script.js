let greenhouseGasLevel = 0;
const maxGreenhouseGasLevel = 100;
const temperatureIncreaseFactor = 0.1;

const infoText = document.getElementById('infoText');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

increaseBtn.addEventListener('click', () => {
  if (greenhouseGasLevel < maxGreenhouseGasLevel) {
    greenhouseGasLevel += 10;
    updateDisplay();
  }
});

decreaseBtn.addEventListener('click', () => {
  if (greenhouseGasLevel > 0) {
    greenhouseGasLevel -= 10;
    updateDisplay();
  }
});

function updateDisplay() {
    document.body.style.backgroundColor = `rgba(255, 0, 0, ${greenhouseGasLevel / maxGreenhouseGasLevel})`;
  
    const temperature = greenhouseGasLevel * temperatureIncreaseFactor;
    const effects = getEffects(greenhouseGasLevel);
  
    infoText.innerHTML = `<strong>Nivel dos Gases do Efeito Estufa:</strong> ${greenhouseGasLevel}%<br>
    <strong>Aumento da Temperatura Média:</strong> ${temperature.toFixed(2)}°C<br>
    <strong>Efeitos:</strong><br>${effects}`;

    const image = document.getElementById('levelImage');
  let imagePath = ''; // Replace with the path to your images

  if (greenhouseGasLevel == 0) {
    imagePath = './imgs/1.jpg';
  } else if (greenhouseGasLevel <= 10) {
    imagePath = './imgs/2.jpg';
  } else if (greenhouseGasLevel <= 20) {
    imagePath = './imgs/3.jpg';
  } else if (greenhouseGasLevel <= 30) {
    imagePath = './imgs/4.jpg';
  } else if (greenhouseGasLevel <= 40) {
    imagePath = './imgs/5.jpg';
  } else if (greenhouseGasLevel <= 50) {
    imagePath = './imgs/6.jpg';
  } else if (greenhouseGasLevel <= 60) {
    imagePath = './imgs/7.webp';
  } else if (greenhouseGasLevel <= 70) {
    imagePath = './imgs/8.jpg';
  } else if (greenhouseGasLevel <= 80) {
    imagePath = './imgs/9.jpg';
  } else if (greenhouseGasLevel <= 90) {
    imagePath = './imgs/10.cms';
  } else if (greenhouseGasLevel <= 100) {
    imagePath = './imgs/11.jpg';
  }
  // Repeat this for each level and set the respective image paths

  image.src = imagePath;
  }

function getEffects(level) {
    let effectsText = '';
  
    if (level === 0) {
      effectsText = 'Neste nível, o efeito estufa é mínimo, mantendo o equilíbrio natural da Terra.';
    } else if (level > 0 && level <= 10) {
      effectsText = 'Nesta fase inicial, o ligeiro aumento dos gases com efeito de estufa resulta numa ligeira intensificação do efeito de estufa. Embora subtil, isto leva a mudanças observáveis ​​nos padrões climáticos e nas temperaturas em várias regiões. Algumas áreas sofrem ligeiras alterações nas condições climáticas, incluindo mudanças nos padrões de precipitação. Os primeiros sinais de stress surgem nos ecossistemas, particularmente em ambientes sensíveis como os recifes de coral e os ecossistemas do Árctico. As regiões agrícolas podem começar a adaptar-se às mudanças nas condições de cultivo, prevendo potenciais desafios no futuro.';
    } else if (level > 10 && level <= 20) {
      effectsText = 'À medida que os níveis de gases com efeito de estufa continuam a aumentar, o efeito torna-se mais perceptível. As mudanças climáticas tornam-se ligeiramente mais pronunciadas em todo o mundo. Certas regiões testemunham condições climáticas alteradas, impactando os ecossistemas locais e a biodiversidade. A frequência de eventos climáticos extremos começa a apresentar um ligeiro aumento, impactando a agricultura e os recursos hídricos. Os primeiros indicadores de stress nos ecossistemas tornam-se mais evidentes, afectando certas espécies vegetais e animais.';
    } else if (level > 20 && level <= 30) {
      effectsText = 'A este nível, a Terra experimenta mudanças modestas nos padrões climáticos. Os impactos observáveis ​​nos ecossistemas tornam-se significativos, afectando potencialmente certas espécies vegetais e animais. As mudanças climáticas tornam-se mais evidentes, causando perturbações nas práticas agrícolas. Há um aumento de eventos climáticos extremos, como tempestades, inundações e secas, afetando diversas regiões do mundo.';
    } else if (level > 30 && level <= 40) {
      effectsText = 'À medida que os níveis de gases com efeito de estufa se intensificam ainda mais, ocorrem alterações climáticas notáveis ​​em várias regiões. A frequência e a gravidade dos fenómenos meteorológicos extremos aumentam significativamente, colocando desafios à agricultura e aos recursos hídricos. Os ecossistemas enfrentam um stress considerável, afetando os habitats e ameaçando inúmeras espécies de plantas e animais. O aumento das temperaturas agrava os desafios na manutenção do rendimento das colheitas e da disponibilidade de água doce.';
    } else if (level > 40 && level <= 50) {
      effectsText = 'Nesta fase, mudanças climáticas significativas tornam-se evidentes em todo o mundo. Os impactos observáveis ​​nos ecossistemas levam a habitats alterados e ameaças potenciais a certas espécies. Os eventos climáticos extremos tornam-se mais frequentes, afetando as práticas agrícolas e os recursos hídricos. O derretimento glacial e o aumento do nível do mar começam a invadir as regiões costeiras, representando ameaças às comunidades vulneráveis ​​e à biodiversidade costeira.';
    } else if (level > 50 && level <= 60) {
      effectsText = 'O planeta sofre graves perturbações nos sistemas climáticos a este nível. Eventos climáticos extremos, como tempestades, inundações e secas, tornam-se mais frequentes e intensos. A subida do nível do mar ameaça cada vez mais as zonas costeiras baixas, levando à erosão costeira e ao deslocamento de populações. Os ecossistemas enfrentam um estresse substancial, resultando na destruição de habitats e no perigo de várias espécies.';
    } else if (level > 60 && level <= 70) {
      effectsText = 'A escalada dos gases com efeito de estufa altera significativamente os padrões climáticos, levando à intensificação de fenómenos meteorológicos extremos. As zonas costeiras enfrentam riscos crescentes decorrentes da subida do nível do mar, representando ameaças aos assentamentos humanos e à biodiversidade. A frequência e gravidade das ondas de calor, tempestades e inundações atingem níveis críticos, impactando a produtividade agrícola e as infra-estruturas.';
    } else if (level > 70 && level <= 80) {
      effectsText = 'A Terra enfrenta perturbações sem precedentes na estabilidade climática. Os eventos climáticos extremos tornam-se generalizados e graves, levando à destruição de infraestruturas e à perda de vidas. O aumento das temperaturas torna algumas regiões inabitáveis, desencadeando migrações forçadas e tensões sociais. O colapso dos ecossistemas acelera-se, resultando numa rápida perda de biodiversidade.';
    } else if (level > 80 && level <= 90) {
      effectsText = 'A este nível, o planeta sofre perturbações graves no clima, levando a impactos catastróficos nos ecossistemas e na biodiversidade. Algumas regiões podem tornar-se inabitáveis ​​devido a temperaturas e condições climáticas extremas.';
    } else if (level > 90 && level < 100) {
      effectsText = 'Neste nível crítico, o planeta passa por mudanças catastróficas. O colapso generalizado do ecossistema leva ao aumento do nível do mar e ao aumento das ameaças à civilização humana. As temperaturas e as condições meteorológicas extremas tornam grandes áreas inabitáveis, causando uma devastação generalizada aos sistemas naturais e humanos.';
    } else if (level === 100) {
      effectsText = 'Os níveis de gases com efeito de estufa que atingem o seu pico resultam em consequências catastróficas. O planeta passa por mudanças irreversíveis, testemunhando eventos de extinção generalizada em várias espécies de plantas e animais. Os habitats humanos tornam-se inabitáveis ​​em inúmeras regiões, levando ao colapso das sociedades e ameaçando a continuidade da vida tal como a conhecemos.';
    }
  
    return effectsText;
  }
