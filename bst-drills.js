const BinarySearchTree = require('./DSA-BST')

function main() {
    const BST = new BinarySearchTree();
    //const BSTLetters = new BinarySearchTree();
    const BST2 = new BinarySearchTree();

    const BST3 = new BinarySearchTree();


    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);

    BST2.insert('E');
    BST2.insert('A');
    BST2.insert('S');
    BST2.insert('Y');
    BST2.insert('Q');
    BST2.insert('U');
    BST2.insert('E');
    BST2.insert('S');
    BST2.insert('T');
    BST2.insert('I');
    BST2.insert('O');
    BST2.insert('N');

    BST3.insert('1', 'Foo')
    BST3.insert('2', 'Boo')
    BST3.insert('8', 'Foot')
    BST3.insert('4', 'Jack')
    BST3.insert('5', 'Bob')
    BST3.insert('3', 'Bitcoin')
    BST3.insert('0', 'ETH')

    console.log(validTree(BST))

}

function tree(t) {
    if (!t) {
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

function sort(tree, d = 0) {
    if (tree) {
        sort(tree.left, d + 1);
        console.log(" ".repeat(d) + tree.value);
        sort(tree.right, d + 1)
    }
}

function getSize(tree) {
    if (tree === null) {
        return -1
    }

    let left = getSize(tree.left)
    let right = getSize(tree.right)

    if (left > right) {
        return left + 1
    } else {
        return right + 1
    }
}

function validTree(tree, min = null, max = null) {
    if (!tree) {
        return true
    }
    if (max !== null && tree.key >= max) {
        return false
    }
    if (min !== null && tree.key <= min) {
        return false
    }

    const leftSide = validTree(tree.left, min, tree.key)
    const rightside = validTree(tree.right, tree.value, max)
    return leftSide && rightside
}



main()