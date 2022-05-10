import {EducationRubricCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRubricCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationRubricCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationRubricCollectionResponseImpl();
}
