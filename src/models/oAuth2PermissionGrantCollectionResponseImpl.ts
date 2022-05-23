import {createOAuth2PermissionGrantFromDiscriminatorValue} from './createOAuth2PermissionGrantFromDiscriminatorValue';
import {OAuth2PermissionGrantImpl} from './index';
import {OAuth2PermissionGrant} from './oAuth2PermissionGrant';
import {OAuth2PermissionGrantCollectionResponse} from './oAuth2PermissionGrantCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OAuth2PermissionGrantCollectionResponseImpl implements AdditionalDataHolder, OAuth2PermissionGrantCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OAuth2PermissionGrant[] | undefined;
    /**
     * Instantiates a new OAuth2PermissionGrantCollectionResponse and sets the default values.
     * @param oAuth2PermissionGrantCollectionResponseParameterValue 
     */
    public constructor(oAuth2PermissionGrantCollectionResponseParameterValue?: OAuth2PermissionGrantCollectionResponse | undefined) {
        this.additionalData = oAuth2PermissionGrantCollectionResponseParameterValue?.additionalData ? oAuth2PermissionGrantCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = oAuth2PermissionGrantCollectionResponseParameterValue?.nextLink ;
        this.value = oAuth2PermissionGrantCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OAuth2PermissionGrantImpl>(createOAuth2PermissionGrantFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OAuth2PermissionGrantImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OAuth2PermissionGrantImpl(element));});
        writer.writeCollectionOfObjectValues<OAuth2PermissionGrantImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
