import hashlib
import string


def cid_hash_from_place_id(text: str, length: int = 30) -> str:
    # Hash input to a large deterministic digest
    digest = hashlib.sha256(text.encode()).digest()

    # Map digest bytes into lowercase letters
    letters = string.ascii_lowercase
    result = []
    for b in digest:
        result.append(letters[b % len(letters)])

    # Join and truncate/pad to desired length
    return "".join(result)[:length]

