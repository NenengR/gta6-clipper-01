import * as fs from 'fs';
import * as path from 'path';

const botDir = process.env.MAKEFUN_BOT_DIR || '.';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

async function main() {
  const src = path.join(botDir, 'VIDEO.json');
  const dstDir = path.resolve(outDir);
  fs.mkdirSync(dstDir, { recursive: true });
  fs.copyFileSync(src, path.join(dstDir, 'VIDEO.json'));
}

main().catch((err) => { console.error(err); process.exit(1); });
