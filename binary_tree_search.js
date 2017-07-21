function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};
function findLargest(rootNode) {
  var current = rootNode;
  while (current) {
      if (!current.right) return current.value;
      current = current.right;
  }
}

function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
      throw new Error('Tree must have at least 2 nodes');
  }

  var current = rootNode;

  while (current) {

      // case: current is largest and has a left subtree
      // 2nd largest is the largest in that subtree
      if (current.left && !current.right) {
          return findLargest(current.left);
      }

      // case: current is parent of largest, and largest has no children,
      // so current is 2nd largest
      if (current.right &&
              !current.right.left &&
              !current.right.right) {
          return current.value;
      }

      current = current.right;
  }
}

// Complexity
// We're doing one walk down our BST, which means O(h)O(h) time, where hh is the height of the tree (again, that's O(\lg{n})O(lgn) if the tree is balanced, O(n)O(n) otherwise). O(1)O(1) space.
//
// What We Learned
// Here we used a "simplify, solve, and adapt" strategy.
//
// The question asks for a function to find the second largest element in a BST, so we started off by simplifying the problem: we thought about how to find the first largest element.
//
// Once we had a strategy for that, we adapted that strategy to work for finding the second largest element.
//
// It may seem counter-intuitive to start off by solving the wrong question. But starting off with a simpler version of the problem is often much faster, because it's easier to wrap our heads around right away.
//
// One more note about this one:
//
// Breaking things down into cases is another strategy that really helped us here.
//
// Notice how simple finding the second largest node got when we divided it into two cases:
//
// The largest node has a left subtree.
// The largest node does not have a left subtree.
// Whenever a problem is starting to feel complicated, try breaking it down into cases.
//
// It can be really helpful to actually draw out sample inputs for those cases. This'll keep your thinking organized and also help get your interviewer on the same page.
