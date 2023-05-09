import {deserializeIntoIncident} from './deserializeIntoIncident';
import {Incident} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncidentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIncident;
}
