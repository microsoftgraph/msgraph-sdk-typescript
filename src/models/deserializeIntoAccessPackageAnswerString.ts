import {AccessPackageAnswerString} from './accessPackageAnswerString';
import {deserializeIntoAccessPackageAnswer} from './deserializeIntoAccessPackageAnswer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAnswerString(accessPackageAnswerString: AccessPackageAnswerString | undefined = {} as AccessPackageAnswerString) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessPackageAnswer(accessPackageAnswerString),
        "value": n => { accessPackageAnswerString.value = n.getStringValue(); },
    }
}
