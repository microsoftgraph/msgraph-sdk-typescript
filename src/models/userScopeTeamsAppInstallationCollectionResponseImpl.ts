import {createUserScopeTeamsAppInstallationFromDiscriminatorValue} from './createUserScopeTeamsAppInstallationFromDiscriminatorValue';
import {UserScopeTeamsAppInstallationImpl} from './index';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {UserScopeTeamsAppInstallationCollectionResponse} from './userScopeTeamsAppInstallationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserScopeTeamsAppInstallationCollectionResponseImpl implements AdditionalDataHolder, Parsable, UserScopeTeamsAppInstallationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UserScopeTeamsAppInstallation[] | undefined;
    /**
     * Instantiates a new UserScopeTeamsAppInstallationCollectionResponse and sets the default values.
     * @param userScopeTeamsAppInstallationCollectionResponseParameterValue 
     */
    public constructor(userScopeTeamsAppInstallationCollectionResponseParameterValue?: UserScopeTeamsAppInstallationCollectionResponse | undefined) {
        this.additionalData = userScopeTeamsAppInstallationCollectionResponseParameterValue?.additionalData ? userScopeTeamsAppInstallationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = userScopeTeamsAppInstallationCollectionResponseParameterValue?.nextLink ;
        this.value = userScopeTeamsAppInstallationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UserScopeTeamsAppInstallationImpl>(createUserScopeTeamsAppInstallationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UserScopeTeamsAppInstallationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UserScopeTeamsAppInstallationImpl(element));});
        writer.writeCollectionOfObjectValues<UserScopeTeamsAppInstallationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
