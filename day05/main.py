def runMaze(input_maze,inc_func):
    maze = input_maze.copy()

    i=0
    turns = 0
    while i<len(maze):
        turns +=1
        maze[i], i = maze[i]+inc_func(maze[i]), maze[i]+i
    return turns

def inc1(mazei):
    return 1

def inc2(mazei):
    return 1 if mazei <3 else -1


testmaze = [0, 3, 0, 1, -3]
assert(runMaze(testmaze,inc1)==5)
assert(runMaze(testmaze,inc2)==10)


with open('input.txt','r') as f:
    maze = list(map(int,f.read().strip().split('\n')))

    print('Answer 1: ',runMaze(maze,inc1))
    print('Answer 2: ',runMaze(maze,inc2))
