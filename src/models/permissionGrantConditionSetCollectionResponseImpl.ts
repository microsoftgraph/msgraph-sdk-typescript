import {createPermissionGrantConditionSetFromDiscriminatorValue} from './createPermissionGrantConditionSetFromDiscriminatorValue';
import {PermissionGrantConditionSetImpl} from './index';
import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionGrantConditionSetCollectionResponse} from './permissionGrantConditionSetCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PermissionGrantConditionSetCollectionResponseImpl implements AdditionalDataHolder, Parsable, PermissionGrantConditionSetCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PermissionGrantConditionSet[] | undefined;
    /**
     * Instantiates a new PermissionGrantConditionSetCollectionResponse and sets the default values.
     * @param permissionGrantConditionSetCollectionResponseParameterValue 
     */
    public constructor(permissionGrantConditionSetCollectionResponseParameterValue?: PermissionGrantConditionSetCollectionResponse | undefined) {
        this.additionalData = permissionGrantConditionSetCollectionResponseParameterValue?.additionalData ? permissionGrantConditionSetCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = permissionGrantConditionSetCollectionResponseParameterValue?.nextLink ;
        this.value = permissionGrantConditionSetCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PermissionGrantConditionSetImpl>(createPermissionGrantConditionSetFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PermissionGrantConditionSetImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PermissionGrantConditionSetImpl(element));});
        writer.writeCollectionOfObjectValues<PermissionGrantConditionSetImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
