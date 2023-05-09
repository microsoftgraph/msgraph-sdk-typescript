import {AccessPackageAnswer} from './accessPackageAnswer';
import {AccessPackageQuestion} from './accessPackageQuestion';
import {serializeAccessPackageQuestion} from './serializeAccessPackageQuestion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAnswer(writer: SerializationWriter, accessPackageAnswer: AccessPackageAnswer | undefined = {} as AccessPackageAnswer) : void {
        writer.writeObjectValue<AccessPackageQuestion>("answeredQuestion", accessPackageAnswer.answeredQuestion, serializeAccessPackageQuestion);
        writer.writeStringValue("displayValue", accessPackageAnswer.displayValue);
        writer.writeStringValue("@odata.type", accessPackageAnswer.odataType);
        writer.writeAdditionalData(accessPackageAnswer.additionalData);
}
