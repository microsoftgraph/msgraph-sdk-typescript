import {createDeviceConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceConfigurationAssignment} from '../../../../models/deviceConfigurationAssignment';
import {serializeDeviceConfigurationAssignment} from '../../../../models/serializeDeviceConfigurationAssignment';
import {AssignResponse} from './assignResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignResponse(assignResponse: AssignResponse | undefined = {} as AssignResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(assignResponse),
        "value": n => { assignResponse.value = n.getCollectionOfObjectValues<DeviceConfigurationAssignment>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
    }
}
