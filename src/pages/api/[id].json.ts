import { getTasks } from '../../services/Tasks.ts';
import type { Task } from '../../types.ts'

export async function GET({ params }) {
  const id = params.id;
  const tasks = await getTasks();

  if (!tasks) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(
    JSON.stringify(tasks), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export async function POST(params:Task) {
  
}