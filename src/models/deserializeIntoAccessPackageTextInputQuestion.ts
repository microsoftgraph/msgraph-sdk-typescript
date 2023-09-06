import { type AccessPackageTextInputQuestion } from './accessPackageTextInputQuestion';
import { deserializeIntoAccessPackageQuestion } from './deserializeIntoAccessPackageQuestion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageTextInputQuestion(accessPackageTextInputQuestion: AccessPackageTextInputQuestion | undefined = {} as AccessPackageTextInputQuestion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessPackageQuestion(accessPackageTextInputQuestion),
        "isSingleLineQuestion": n => { accessPackageTextInputQuestion.isSingleLineQuestion = n.getBooleanValue(); },
        "regexPattern": n => { accessPackageTextInputQuestion.regexPattern = n.getStringValue(); },
    }
}
