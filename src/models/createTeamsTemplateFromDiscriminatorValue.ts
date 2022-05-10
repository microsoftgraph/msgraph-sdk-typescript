import {TeamsTemplateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsTemplateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsTemplateImpl();
}
