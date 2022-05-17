import {createModifiedPropertyFromDiscriminatorValue} from './createModifiedPropertyFromDiscriminatorValue';
import {GroupType} from './groupType';
import {ModifiedPropertyImpl} from './index';
import {ModifiedProperty} from './modifiedProperty';
import {TargetResource} from './targetResource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetResourceImpl implements AdditionalDataHolder, Parsable, TargetResource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** Indicates the visible name defined for the resource. Typically specified when the resource is created. */
    displayName?: string | undefined;
    /** When type is set to Group, this indicates the group type.  Possible values are: unifiedGroups, azureAD, and unknownFutureValue */
    groupType?: GroupType | undefined;
    /** Indicates the unique ID of the resource. */
    id?: string | undefined;
    /** Indicates name, old value and new value of each attribute that changed. Property values depend on the operation type. */
    modifiedProperties?: ModifiedProperty[] | undefined;
    /** Describes the resource type.  Example values include Application, Group, ServicePrincipal, and User. */
    type?: string | undefined;
    /** When type is set to User, this includes the user name that initiated the action; null for other types. */
    userPrincipalName?: string | undefined;
    /**
     * Instantiates a new targetResource and sets the default values.
     * @param targetResourceParameterValue 
     */
    public constructor(targetResourceParameterValue?: TargetResource | undefined) {
        this.additionalData = {};
        this.additionalData = targetResourceParameterValue?.additionalData ? {} : targetResourceParameterValue?.additionalData!
        this.displayName = targetResourceParameterValue?.displayName ;
        this.groupType = targetResourceParameterValue?.groupType ;
        this.id = targetResourceParameterValue?.id ;
        this.modifiedProperties = targetResourceParameterValue?.modifiedProperties ;
        this.type = targetResourceParameterValue?.type ;
        this.userPrincipalName = targetResourceParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "groupType": n => { this.groupType = n.getEnumValue<GroupType>(GroupType); },
            "id": n => { this.id = n.getStringValue(); },
            "modifiedProperties": n => { this.modifiedProperties = n.getCollectionOfObjectValues<ModifiedPropertyImpl>(createModifiedPropertyFromDiscriminatorValue); },
            "type": n => { this.type = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.groupType){
        if(this.groupType)
        writer.writeEnumValue<GroupType>("groupType", this.groupType);
        }
        if(this.id){
        if(this.id)
        writer.writeStringValue("id", this.id);
        }
        if(this.modifiedProperties){
        const modifiedPropertiesArrValue: ModifiedPropertyImpl[] = []; this.modifiedProperties?.forEach(element => {modifiedPropertiesArrValue.push(new ModifiedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<ModifiedPropertyImpl>("modifiedProperties", modifiedPropertiesArrValue);
        }
        if(this.type){
        if(this.type)
        writer.writeStringValue("type", this.type);
        }
        if(this.userPrincipalName){
        if(this.userPrincipalName)
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
