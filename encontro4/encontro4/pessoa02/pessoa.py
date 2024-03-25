class Pessoa:
    ano_atual = 2024
    
    def __init__(self, nome, idade):
        self.nome = nome 
        self.idade = idade
    #metodo simples    
    def get_ano_nascimento(self):
        print(self.ano_atual - self.idade)
    #O @classmethod permite que você chame o metodo de 
    #uma classe sem precisar instânciar.
    #Vale ressaltar que por convenção usamos o cls 
    #Para referênciar a classe no classmethod, no 
    #lugar onde ficaria o self.
    @classmethod
    def por_ano_nascimento(cls, nome, ano_nascimento):
        idade = cls.ano_atual - ano_nascimento
        return cls(nome, idade)

    


        
