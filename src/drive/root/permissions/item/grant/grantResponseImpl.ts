import {PermissionImpl} from '../../../../../models/';
import {createPermissionFromDiscriminatorValue} from '../../../../../models/createPermissionFromDiscriminatorValue';
import {Permission} from '../../../../../models/permission';
import {GrantResponse} from './grantResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the grant method. */
export class GrantResponseImpl implements AdditionalDataHolder, GrantResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: Permission[] | undefined;
    /**
     * Instantiates a new grantResponse and sets the default values.
     * @param grantResponseParameterValue 
     */
    public constructor(grantResponseParameterValue?: GrantResponse | undefined) {
        this.additionalData = grantResponseParameterValue?.additionalData ? grantResponseParameterValue?.additionalData! : {}
        this.value = grantResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<PermissionImpl>(createPermissionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: PermissionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PermissionImpl(element));});
        writer.writeCollectionOfObjectValues<PermissionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
