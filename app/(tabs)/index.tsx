import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const OnboardScreen = ({ navigation }) => {
  const swiperRef = useRef(null);

  return (
    <ImageBackground 
      source={require('../../assets/images/fundo-rosa.jpg')} // Caminho da imagem de fundo
      style={styles.background}
      resizeMode="cover" // Ajusta a imagem para cobrir toda a área
    >
      <Swiper
        ref={swiperRef}
        loop={false}
        paginationStyle={{ bottom: 50 }}
        dotColor="#ccc"
        activeDotColor="#000"
        style={styles.wrapper}
      >
        <View style={styles.slide}>
          <Image source={require('../../assets/images/ma-desenhada.png')} style={styles.image}/>
          <Text style={styles.title}>Vermelhinho {'\n'}</Text>
          <Text style={styles.description}>Este app foi uma ideia da minha querida esposa,
             com o objetivo de ajudar muitas outras mulheres no 
             controle menstrual, além de oferecer diversos recursos 
             para auxiliá-las em seus momentos íntimos.</Text>
          <TouchableOpacity style={styles.button} onPress={() => swiperRef.current.scrollBy(1)}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.slide}>
          <Image source={require('../../assets/images/pc_espera.png')} style={styles.image}/>
          <Text style={styles.title}>Como funciona? {'\n'}</Text>
          <Text style={styles.description}>Ele fará o controle menstrual, 
            fornecerá dicas para o alívio das cólicas, 
            ajudará na sua alimentação durante o período menstrual 
            e permitirá compartilhar seus dados com seu(a) companheiro(a) 
            para auxiliar nos dias difíceis e torná-los melhores.</Text>
          <TouchableOpacity style={styles.button} onPress={() => swiperRef.current.scrollBy(1)}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.slide}>
          <Image source={require('../../assets/images/womens.png')} style={styles.image}/>
          <Text style={styles.title}>Vantagens do Vermelhinho</Text>
          <Text style={styles.description}>Este app oferece controle completo da menstruação,
             com alertas sobre o período fértil, 
             ajudando no planejamento e autoconhecimento.
              Você também pode registrar seu humor, 
              acompanhando mudanças ao longo do ciclo.
              Além disso, o app fornece dicas de saúde e bem-estar,
              auxiliando na alimentação e cuidados durante o período menstrual,
             tornando seu dia a dia mais fácil e saudável.</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.replace('login')}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ocupa toda a tela
  },
  wrapper: {
    // Adicione estilos se necessário
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 120,
    height: 60,
    borderRadius: 30, // Bordas arredondadas
    backgroundColor: '#e8a2d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    gap: 15,
    width: 300,
    height: 300,
    marginBottom: 40,
    borderRadius: 110,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    gap:15,
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#fff',
  },
});

export default OnboardScreen;
