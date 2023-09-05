import { type SubjectSet } from './subjectSet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubjectSet(subjectSet: SubjectSet | undefined = {} as SubjectSet) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { subjectSet.odataType = n.getStringValue(); },
    }
}
