import {EntityImpl} from './index';
import {WorkbookChartFill} from './workbookChartFill';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookChartFillImpl extends EntityImpl implements Parsable, WorkbookChartFill {
    /**
     * Instantiates a new workbookChartFill and sets the default values.
     * @param workbookChartFillParameterValue 
     */
    public constructor(workbookChartFillParameterValue?: WorkbookChartFill | undefined) {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
