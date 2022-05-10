import {EducationClassCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationClassCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationClassCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationClassCollectionResponseImpl();
}
