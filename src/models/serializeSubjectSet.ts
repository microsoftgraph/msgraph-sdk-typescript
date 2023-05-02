import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubjectSet(writer: SerializationWriter, subjectSet: SubjectSet | undefined = {} as SubjectSet) : void {
        writer.writeStringValue("@odata.type", subjectSet.odataType);
        writer.writeAdditionalData(subjectSet.additionalData);
}
