import {createWorkforceIntegrationFromDiscriminatorValue} from './createWorkforceIntegrationFromDiscriminatorValue';
import {EntityImpl, WorkforceIntegrationImpl} from './index';
import {Teamwork} from './teamwork';
import {WorkforceIntegration} from './workforceIntegration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkImpl extends EntityImpl implements Teamwork {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A workforce integration with shifts. */
    public workforceIntegrations?: WorkforceIntegration[] | undefined;
    /**
     * Instantiates a new Teamwork and sets the default values.
     * @param teamworkParameterValue 
     */
    public constructor(teamworkParameterValue?: Teamwork | undefined) {
        super(teamworkParameterValue);
        this.additionalData = teamworkParameterValue?.additionalData ? teamworkParameterValue?.additionalData! : {};
        const workforceIntegrationsArrValue: WorkforceIntegrationImpl[] = []; teamworkParameterValue.workforceIntegrations?.forEach(element => {workforceIntegrationsArrValue.push(element instanceof WorkforceIntegrationImpl? element : new WorkforceIntegrationImpl(element));});
        this.workforceIntegrations = workforceIntegrationsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "workforceIntegrations": n => { this.workforceIntegrations = n.getCollectionOfObjectValues<WorkforceIntegrationImpl>(createWorkforceIntegrationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.workforceIntegrations && this.workforceIntegrations.length != 0){        const workforceIntegrationsArrValue: WorkforceIntegrationImpl[] = []; this.workforceIntegrations?.forEach(element => {workforceIntegrationsArrValue.push(element instanceof WorkforceIntegrationImpl? element : new WorkforceIntegrationImpl(element));});
            writer.writeCollectionOfObjectValues<WorkforceIntegrationImpl>("workforceIntegrations", workforceIntegrationsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
