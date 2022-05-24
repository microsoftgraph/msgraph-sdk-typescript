import {createTeamsAppInstallationFromDiscriminatorValue} from './createTeamsAppInstallationFromDiscriminatorValue';
import {TeamsAppInstallationImpl} from './index';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsAppInstallationCollectionResponse} from './teamsAppInstallationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppInstallationCollectionResponseImpl implements AdditionalDataHolder, Parsable, TeamsAppInstallationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TeamsAppInstallation[] | undefined;
    /**
     * Instantiates a new TeamsAppInstallationCollectionResponse and sets the default values.
     * @param teamsAppInstallationCollectionResponseParameterValue 
     */
    public constructor(teamsAppInstallationCollectionResponseParameterValue?: TeamsAppInstallationCollectionResponse | undefined) {
        this.additionalData = teamsAppInstallationCollectionResponseParameterValue?.additionalData ? teamsAppInstallationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = teamsAppInstallationCollectionResponseParameterValue?.nextLink ;
        this.value = teamsAppInstallationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TeamsAppInstallationImpl>(createTeamsAppInstallationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TeamsAppInstallationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TeamsAppInstallationImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsAppInstallationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
