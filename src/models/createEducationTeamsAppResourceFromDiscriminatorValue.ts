import {deserializeIntoEducationTeamsAppResource} from './deserializeIntoEducationTeamsAppResource';
import {EducationTeamsAppResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationTeamsAppResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationTeamsAppResource;
}
