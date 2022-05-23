import {EducationCategoryCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationCategoryCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationCategoryCollectionResponseImpl();
}
