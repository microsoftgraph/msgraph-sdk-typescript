import {Incident} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncidentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Incident {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Incident();
}
