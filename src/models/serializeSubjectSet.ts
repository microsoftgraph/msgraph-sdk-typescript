import { type SubjectSet } from './subjectSet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubjectSet(writer: SerializationWriter, subjectSet: SubjectSet | undefined = {} as SubjectSet) : void {
        writer.writeStringValue("@odata.type", subjectSet.odataType);
        writer.writeAdditionalData(subjectSet.additionalData);
}
