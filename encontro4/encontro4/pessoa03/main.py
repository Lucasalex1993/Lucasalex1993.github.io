from pessoa import Pessoa
p1 = Pessoa('Eder ', 102)
#print(p1)
print(p1.nome, p1.idade)
p1.get_ano_nascimento()
p2 = Pessoa.por_ano_nascimento('Carlos', 1983)
#print(p2)
print(p2.nome, p2.idade)
p2.get_ano_nascimento()
#Conceito de estancia do metodo estatico
print("Gera id direto da classe ",Pessoa.gera_id())
print("Gera id para p1 ",p1.gera_id())

