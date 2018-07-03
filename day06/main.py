def redistributeBank(input_bank):
    bank = input_bank.copy()

    states = set()
    stateTime = dict()
    turns = 0
    while tuple(bank) not in states:
        states.add(tuple(bank))
        stateTime[tuple(bank)] = turns
        turns +=1

        maxBank,argBank = argmax(bank)
        lenBank = len(bank)
        nPerBank = maxBank // lenBank
        leftover = maxBank-nPerBank*lenBank

        bank[argBank]=0
        for i in range(lenBank):
            bank[(argBank+i+1)%lenBank] += nPerBank + (0 if leftover <=0 else 1)
            leftover -= 1

    return turns,turns-stateTime[tuple(bank)]


def argmax(bank):
    a,m = 0,bank[0]
    for i,block in enumerate(bank[1:]):
        if block > m:
            a = i+1
            m = block
    return m,a


testbank = [0, 2, 7, 0]
assert(redistributeBank(testbank)==(5,4))


with open('input.txt','r') as f:
    bank = list(map(int,f.read().strip('\n').split('\t')))

    print('Answer (1,2): ',redistributeBank(bank))
