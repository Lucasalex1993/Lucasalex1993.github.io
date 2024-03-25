from random import randint
class Pessoa:
    ano_atual = 2024
    
    def __init__(self, nome, idade):
        self.nome = nome 
        self.idade = idade
    #metodo simples    
    def get_ano_nascimento(self):
        print(self.ano_atual - self.idade)

    @classmethod
    def por_ano_nascimento(cls, nome, ano_nascimento):
        idade = cls.ano_atual - ano_nascimento
        return cls(nome, idade)
    #Um método estático é um método que está vinculado
    #à classe e não ao objeto da classe, ou seja, um método 
    # que atua sobre a classe, não sobre as instâncias dela.
    @staticmethod
    def gera_id():
        rand = randint(10000, 19999)
        return rand
        
    


        
