import {Application} from '../../models/application';
import {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: Application[] | undefined;
}
