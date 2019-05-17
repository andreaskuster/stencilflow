import unittest

from bounded_queue import BoundedQueue
class BoundedQueueTest(unittest.TestCase):

    def test_init(self):
        # init
        queue = BoundedQueue(name="test",
                             maxsize=5)
        # init_queue
        collection = [1.0, 2.0, 3.0, 4.0, 5.0]
        queue.init_queue(collection)
        self.assertEqual(queue.size(), len(collection))
        self.assertEqual(queue.peek(1), collection[1])
        self.assertRaises(RuntimeError, queue.init_queue, 6*[1.0])

    def test_enq_deq(self):
        # init
        queue = BoundedQueue(name="test",
                             maxsize=1,
                             collection=[1.0])
        # dequeue
        self.assertEqual(queue.size(), 1)
        self.assertEqual(queue.dequeue(), 1.0)
        self.assertEqual(queue.size(), 0)
        self.assertTrue(queue.is_empty())
        self.assertRaises(RuntimeError, queue.dequeue)
        # enqueue
        queue.enqueue(1.0)
        self.assertTrue(queue.is_full())
        self.assertRaises(RuntimeError, queue.enqueue, 2.0)

    def test_try_enq_deq(self):
        # init
        queue = BoundedQueue(name="test",
                             maxsize=1,
                             collection=[1.0])
        # try dequeue
        self.assertEqual(queue.size(), 1)
        self.assertEqual(queue.try_dequeue(), 1.0)
        self.assertEqual(queue.size(), 0)
        self.assertTrue(queue.is_empty())
        self.assertFalse(queue.try_dequeue())
        # try enqueue
        self.assertTrue(queue.try_enqueue(1.0))
        self.assertTrue(queue.is_full())
        self.assertFalse(queue.try_enqueue(), 2.0)

    def test_peek(self):
        # init
        queue = BoundedQueue(name="test",
                             maxsize=2,
                             collection=[1.0, 2.0])
        # peek / try peek
        self.assertEqual(queue.peek(0), 1.0)
        self.assertEqual(queue.peek(1), 2.0)
        self.assertEqual(queue.try_peek_last(), 2.0)
        queue.dequeue()
        queue.dequeue()
        self.assertFalse(queue.try_peek_last())

if __name__ == '__main__':
    unittest.main()
