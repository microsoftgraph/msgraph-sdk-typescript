import {createApplicationFromDiscriminatorValue} from './createApplicationFromDiscriminatorValue';
import {createServicePrincipalFromDiscriminatorValue} from './createServicePrincipalFromDiscriminatorValue';
import {Application, ServicePrincipal} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplicationServicePrincipal implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The application property */
    private _application?: Application | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The servicePrincipal property */
    private _servicePrincipal?: ServicePrincipal | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the application property value. The application property
     * @returns a application
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. The application property
     * @param value Value to set for the application property.
     */
    public set application(value: Application | undefined) {
        this._application = value;
    };
    /**
     * Instantiates a new applicationServicePrincipal and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.applicationServicePrincipal";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "application": n => { this.application = n.getObjectValue<Application>(createApplicationFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "servicePrincipal": n => { this.servicePrincipal = n.getObjectValue<ServicePrincipal>(createServicePrincipalFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Application>("application", this.application);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<ServicePrincipal>("servicePrincipal", this.servicePrincipal);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the servicePrincipal property value. The servicePrincipal property
     * @returns a servicePrincipal
     */
    public get servicePrincipal() {
        return this._servicePrincipal;
    };
    /**
     * Sets the servicePrincipal property value. The servicePrincipal property
     * @param value Value to set for the servicePrincipal property.
     */
    public set servicePrincipal(value: ServicePrincipal | undefined) {
        this._servicePrincipal = value;
    };
}
