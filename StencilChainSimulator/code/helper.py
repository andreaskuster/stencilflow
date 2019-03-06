import json


class Helper:

    def __init__(self):
        pass

    @staticmethod
    def parse_json(config_path):

        # open file in with-clause, to ensure proper file closing even in the event of an exception
        with open(config_path, "r") as file_handle:
            # try to parse it
            config = json.loads(file_handle.read())  # type: dict

        # return dict
        return config

    @staticmethod
    def max_buffer(buffer):
        max_buf = [0, 0, 0]
        for buf in buffer:
            entry = buffer[buf]
            if entry[0] > max_buf[0]:
                max_buf = entry
            elif entry[0] == max_buf[0] and entry[1] > max_buf[1]:
                max_buf = entry
            elif entry[0] == max_buf[0] and entry[1] == max_buf[1] and entry[2] > max_buf[2]:
                max_buf = entry
        return max_buf

    @staticmethod
    def max_list_entry(buf):
        max_buf = [0, 0, 0]
        for entry in buf:
            if entry[0] > max_buf[0]:
                max_buf = entry
            elif entry[0] == max_buf[0] and entry[1] > max_buf[1]:
                max_buf = entry
            elif entry[0] == max_buf[0] and entry[1] == max_buf[1] and entry[2] > max_buf[2]:
                max_buf = entry
        return max_buf

    @staticmethod
    def min_list_entry(buf):
        min_buf = buf[0]
        for entry in buf:
            if entry[0] < min_buf[0]:
                min_buf = entry
            elif entry[0] == min_buf[0] and entry[1] < min_buf[1]:
                min_buf = entry
            elif entry[0] == min_buf[0] and entry[1] == min_buf[1] and entry[2] < min_buf[2]:
                min_buf = entry
        return min_buf

    @staticmethod
    def list_add_cwise(list1, list2):
        return list(map(lambda x, y: x + y, list1, list2))

    @staticmethod
    def list_subtract_cwise(list1, list2):
        return list(map(lambda x, y: x - y, list1, list2))

    @staticmethod
    def compare_to(index_a, index_b):  # A >= B ?
        if index_a[0] > index_b[0]:
            return True
        elif index_a[0] == index_b[0]:
            if index_a[1] > index_b[1]:
                return True
            elif index_a[1] == index_b[1]:
                if index_a[2] > index_b[2]:
                    return True
                elif index_a[2] == index_b[2]:
                    return True
                else:
                    return False
            else:
                return False
        else:
            return False

    @staticmethod
    def stencil_memory_index(indices, dimensions):
        if len(indices) != len(dimensions):
            raise ValueError("Dimension mismatch")
        factor = 1
        res = 0
        for i, d in zip(reversed(indices), reversed(dimensions)):
            res += i * factor
            factor *= d
        return res

    @staticmethod
    def stencil_distance(a, b, dimensions):
        return abs(Helper.stencil_memory_index(a) - Helper.stencil_memory_index(b))

