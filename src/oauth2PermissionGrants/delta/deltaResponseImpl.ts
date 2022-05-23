import {OAuth2PermissionGrantImpl} from '../../models/';
import {createOAuth2PermissionGrantFromDiscriminatorValue} from '../../models/createOAuth2PermissionGrantFromDiscriminatorValue';
import {OAuth2PermissionGrant} from '../../models/oAuth2PermissionGrant';
import {DeltaResponse} from './deltaResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the delta method. */
export class DeltaResponseImpl implements AdditionalDataHolder, DeltaResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: OAuth2PermissionGrant[] | undefined;
    /**
     * Instantiates a new deltaResponse and sets the default values.
     * @param deltaResponseParameterValue 
     */
    public constructor(deltaResponseParameterValue?: DeltaResponse | undefined) {
        this.additionalData = deltaResponseParameterValue?.additionalData ? deltaResponseParameterValue?.additionalData! : {}
        this.value = deltaResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<OAuth2PermissionGrantImpl>(createOAuth2PermissionGrantFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: OAuth2PermissionGrantImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OAuth2PermissionGrantImpl(element));});
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrantImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
