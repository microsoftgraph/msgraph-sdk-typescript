import { type AccessPackageLocalizedText } from './accessPackageLocalizedText';
import { type AccessPackageQuestion } from './accessPackageQuestion';
import { serializeAccessPackageLocalizedText } from './serializeAccessPackageLocalizedText';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageQuestion(writer: SerializationWriter, accessPackageQuestion: AccessPackageQuestion | undefined = {} as AccessPackageQuestion) : void {
        serializeEntity(writer, accessPackageQuestion)
        writer.writeBooleanValue("isAnswerEditable", accessPackageQuestion.isAnswerEditable);
        writer.writeBooleanValue("isRequired", accessPackageQuestion.isRequired);
        writer.writeCollectionOfObjectValues<AccessPackageLocalizedText>("localizations", accessPackageQuestion.localizations, serializeAccessPackageLocalizedText);
        writer.writeNumberValue("sequence", accessPackageQuestion.sequence);
        writer.writeStringValue("text", accessPackageQuestion.text);
}
