import {AccessPackageTextInputQuestion} from './accessPackageTextInputQuestion';
import {deserializeIntoAccessPackageQuestion} from './deserializeIntoAccessPackageQuestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageTextInputQuestion(accessPackageTextInputQuestion: AccessPackageTextInputQuestion | undefined = {} as AccessPackageTextInputQuestion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessPackageQuestion(accessPackageTextInputQuestion),
        "isSingleLineQuestion": n => { accessPackageTextInputQuestion.isSingleLineQuestion = n.getBooleanValue(); },
        "regexPattern": n => { accessPackageTextInputQuestion.regexPattern = n.getStringValue(); },
    }
}
