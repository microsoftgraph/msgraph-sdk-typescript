import {createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue} from './createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue';
import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {DeviceAndAppManagementRoleAssignmentCollectionResponse} from './deviceAndAppManagementRoleAssignmentCollectionResponse';
import {DeviceAndAppManagementRoleAssignmentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceAndAppManagementRoleAssignmentCollectionResponseImpl implements AdditionalDataHolder, DeviceAndAppManagementRoleAssignmentCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceAndAppManagementRoleAssignment[] | undefined;
    /**
     * Instantiates a new DeviceAndAppManagementRoleAssignmentCollectionResponse and sets the default values.
     * @param deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue 
     */
    public constructor(deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?: DeviceAndAppManagementRoleAssignmentCollectionResponse | undefined) {
        this.additionalData = deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?.additionalData ? deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = deviceAndAppManagementRoleAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceAndAppManagementRoleAssignmentImpl>(createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceAndAppManagementRoleAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceAndAppManagementRoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceAndAppManagementRoleAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
