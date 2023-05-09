import {AccessPackageAnswer} from './accessPackageAnswer';
import {AccessPackageQuestion} from './accessPackageQuestion';
import {createAccessPackageQuestionFromDiscriminatorValue} from './createAccessPackageQuestionFromDiscriminatorValue';
import {serializeAccessPackageQuestion} from './serializeAccessPackageQuestion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAnswer(accessPackageAnswer: AccessPackageAnswer | undefined = {} as AccessPackageAnswer) : Record<string, (node: ParseNode) => void> {
    return {
        "answeredQuestion": n => { accessPackageAnswer.answeredQuestion = n.getObjectValue<AccessPackageQuestion>(createAccessPackageQuestionFromDiscriminatorValue); },
        "displayValue": n => { accessPackageAnswer.displayValue = n.getStringValue(); },
        "@odata.type": n => { accessPackageAnswer.odataType = n.getStringValue(); },
    }
}
