function isBalanced(root){
  if(!root) return true;

  let nodes = ([root, 0]);
  let depths = [];

  while(root.length){
    let nodePair = nodes[0].pop();
    let node = nodePair[0];
    let depth = nodePair[1];

    // if we found a leaf:
    if(!node.right && !node.left){
      if(!node.right && !node.left){
        if(!depths.indexof(depth) < 0){
          depths.push(depth);

          if(depths.length > 2 || (depths.length ===2 &&depth[0] > depth[1])){
            return false;
          }
        }
      }
    }
  }
  return true;

}
