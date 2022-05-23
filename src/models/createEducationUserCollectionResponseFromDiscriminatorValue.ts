import {EducationUserCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationUserCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationUserCollectionResponseImpl();
}
