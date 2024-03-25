class Pessoa:
    #metodo construtor 
    def __init__(self, nome, idade, comendo=False, falando=False):
        self.nome = nome 
        self.idade = idade
        self.comendo = comendo
        self.falando = falando
    #metodo simples    
    def comer(self, alimento):
        if self.comendo:
            print(f'{self.nome}já está comendo.')
            return
        print(f'{self.nome} com a idade de {self.idade} anos, está comendo {alimento}.')
        self.comendo = True
    #metodo simples
    def parar_comer(self):
        if not self.comendo:
            print(f'{self.nome} não esta comendo.')
            return
    #motodo simples
    def falar(self):
        print('A pessoa está falando....')


        
