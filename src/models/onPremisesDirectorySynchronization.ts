import {createOnPremisesDirectorySynchronizationConfigurationFromDiscriminatorValue} from './createOnPremisesDirectorySynchronizationConfigurationFromDiscriminatorValue';
import {createOnPremisesDirectorySynchronizationFeatureFromDiscriminatorValue} from './createOnPremisesDirectorySynchronizationFeatureFromDiscriminatorValue';
import {Entity, OnPremisesDirectorySynchronizationConfiguration, OnPremisesDirectorySynchronizationFeature} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesDirectorySynchronization extends Entity implements Parsable {
    /** Consists of configurations that can be fine-tuned and impact the on-premises directory synchronization process for a tenant. */
    private _configuration?: OnPremisesDirectorySynchronizationConfiguration | undefined;
    /** The features property */
    private _features?: OnPremisesDirectorySynchronizationFeature | undefined;
    /**
     * Gets the configuration property value. Consists of configurations that can be fine-tuned and impact the on-premises directory synchronization process for a tenant.
     * @returns a onPremisesDirectorySynchronizationConfiguration
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. Consists of configurations that can be fine-tuned and impact the on-premises directory synchronization process for a tenant.
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: OnPremisesDirectorySynchronizationConfiguration | undefined) {
        this._configuration = value;
    };
    /**
     * Instantiates a new onPremisesDirectorySynchronization and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the features property value. The features property
     * @returns a onPremisesDirectorySynchronizationFeature
     */
    public get features() {
        return this._features;
    };
    /**
     * Sets the features property value. The features property
     * @param value Value to set for the features property.
     */
    public set features(value: OnPremisesDirectorySynchronizationFeature | undefined) {
        this._features = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "configuration": n => { this.configuration = n.getObjectValue<OnPremisesDirectorySynchronizationConfiguration>(createOnPremisesDirectorySynchronizationConfigurationFromDiscriminatorValue); },
            "features": n => { this.features = n.getObjectValue<OnPremisesDirectorySynchronizationFeature>(createOnPremisesDirectorySynchronizationFeatureFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<OnPremisesDirectorySynchronizationConfiguration>("configuration", this.configuration);
        writer.writeObjectValue<OnPremisesDirectorySynchronizationFeature>("features", this.features);
    };
}
