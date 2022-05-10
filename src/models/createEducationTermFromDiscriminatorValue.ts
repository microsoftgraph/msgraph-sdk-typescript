import {EducationTermImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationTermFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationTermImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationTermImpl();
}
