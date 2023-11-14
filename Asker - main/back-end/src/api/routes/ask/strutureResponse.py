
def createStruture(datas: list) -> any:

    datas_resp = list()
    dict_index = (
        "statement",
        "A",
        "B",
        "C",
        "D",
        "correct",
        "level"
    )

    for level in datas:
            datas_resp.append({

                dict_index[0]: level[0],
                dict_index[1]: level[1],
                dict_index[2]: level[2],
                dict_index[3]: level[3],
                dict_index[4]: level[4],
                dict_index[5]: level[5],
                dict_index[6]: level[6]
            })

    return datas_resp
